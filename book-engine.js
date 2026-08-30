// ================================================
// BOOK ENGINE - Page turning and reading logic
// ================================================

class BookReader {
    constructor() {
        this.currentState = null;
        this.currentPage = 0;
        this.totalPages = 0;
    }

    init(state) {
        this.currentState = state;
        this.currentPage = 0;
        this.totalPages = STATES_DATA[state]?.pages?.length || 5;
        this.renderPage();
    }

    renderPage() {
        const stateData = STATES_DATA[this.currentState];
        if (!stateData || !stateData.pages) return;

        const pages = stateData.pages;
        const leftIdx = this.currentPage;
        const rightIdx = this.currentPage + 1;

        const leftContent = document.getElementById('leftPageContent');
        const leftPageNum = document.getElementById('leftPageNum');

        if (leftIdx < pages.length) {
            leftContent.innerHTML = `<h1>${stateData.emoji} ${this.currentState}</h1><h3>${pages[leftIdx].title}</h3><div>${pages[leftIdx].content}</div>`;
            leftPageNum.textContent = `${leftIdx + 1}`;
        } else {
            leftContent.innerHTML = '';
            leftPageNum.textContent = '';
        }

        const rightContent = document.getElementById('rightPageContent');
        const rightPageNum = document.getElementById('rightPageNum');

        if (rightIdx < pages.length) {
            rightContent.innerHTML = `<h3>${pages[rightIdx].title}</h3><div>${pages[rightIdx].content}</div>`;
            rightPageNum.textContent = `${rightIdx + 1}`;
        } else {
            rightContent.innerHTML = '';
            rightPageNum.textContent = '';
        }

        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        prevBtn.disabled = this.currentPage <= 0;
        nextBtn.disabled = this.currentPage + 2 >= pages.length;

        const progress = ((this.currentPage + 2) / pages.length) * 100;
        document.getElementById('progressFill').style.width = progress + '%';
    }

    nextPage() {
        if (this.currentPage + 2 < this.totalPages) {
            this.currentPage += 2;
            this.renderPage();
        }
    }

    prevPage() {
        if (this.currentPage > 0) {
            this.currentPage -= 2;
            this.renderPage();
        }
    }

    close() {
        this.currentState = null;
        this.currentPage = 0;
    }
}

window.bookReader = new BookReader();
