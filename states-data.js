const STATES_DATA = {
    'Andhra Pradesh': {
        emoji: '🏛️',
        capital: 'Amaravati',
        pages: [
            { title: 'Overview', content: '<h2>Geography</h2><p>Andhra Pradesh is a coastal state on India’s eastern side, known for its long shoreline, river deltas, and fast-growing cities.</p><div class="stat-box"><strong>Capital:</strong> Amaravati | <strong>Language:</strong> Telugu</div>' },
            { title: 'Culture', content: '<h2>Culture</h2><p>The state is famous for Kuchipudi dance, Telugu literature, temple traditions, and vibrant festivals like Ugadi and Sankranti.</p>' },
            { title: 'Heritage', content: '<h2>Heritage</h2><p>Andhra has deep roots in the Satavahana and Chola traditions, and its temple architecture is historically rich and diverse.</p>' },
            { title: 'Economy', content: '<h2>Economy</h2><p>It is a major hub for agriculture, ports, pharmaceuticals, seafood, and information technology growth.</p>' },
            { title: 'Highlights', content: '<div class="unique-fact"><span class="fact-title">✨ Special ✨</span>Home to Tirupati, long coastline, rich temple culture, and thriving industry.</div>' }
        ]
    },
    'Arunachal Pradesh': {
        emoji: '🏔️',
        capital: 'Itanagar',
        pages: [
            { title: 'Overview', content: '<h2>Geography</h2><p>Arunachal Pradesh is the Himalayan state in Northeast India, known for mountain valleys, rivers, and tribal traditions.</p><div class="stat-box"><strong>Capital:</strong> Itanagar | <strong>Region:</strong> Northeast</div>' },
            { title: 'Culture', content: '<h2>Culture</h2><p>It is home to many indigenous tribes, with festivals such as Losar, Solung, and Nyokum celebrated with local rituals.</p>' },
            { title: 'Nature', content: '<h2>Nature</h2><p>The state is rich in forests, waterfalls, monasteries, and mountain passes like Sela and Bum La.</p>' },
            { title: 'Tourism', content: '<h2>Tourism</h2><p>Popular for Tawang Monastery, Ziro Valley, Namdapha, and scenic Himalayan treks.</p>' },
            { title: 'Highlights', content: '<div class="unique-fact"><span class="fact-title">✨ Special ✨</span>Known as the Land of Dawn-Lit Mountains and tribal cultural diversity.</div>' }
        ]
    },
    'Assam': {
        emoji: '🦏',
        capital: 'Dispur',
        pages: [
            { title: 'Overview', content: '<h2>Geography</h2><p>Assam lies in the northeast and is shaped by the Brahmaputra Valley, lush forests, and wildlife-rich regions.</p><div class="stat-box"><strong>Capital:</strong> Dispur | <strong>Known for:</strong> Tea and rhinos</div>' },
            { title: 'Culture', content: '<h2>Culture</h2><p>Assam celebrates Bihu, classical dance, silk production, and a rich tradition of performing arts and handicrafts.</p>' },
            { title: 'Wildlife', content: '<h2>Wildlife</h2><p>Kaziranga National Park is famous for one-horned rhinoceroses, elephants, and migratory birds.</p>' },
            { title: 'Economy', content: '<h2>Economy</h2><p>Tea, petroleum, silk, and tourism are among the main drivers of the state economy.</p>' },
            { title: 'Highlights', content: '<div class="unique-fact"><span class="fact-title">✨ Special ✨</span>World-famous for Assam tea and the Brahmaputra river ecosystem.</div>' }
        ]
    },
    'Bihar': {
        emoji: '🙏',
        capital: 'Patna',
        pages: [
            { title: 'Overview', content: '<h2>Geography</h2><p>Bihar is an ancient state in the Gangetic plains, known for fertile land, rivers, and historic cities.</p><div class="stat-box"><strong>Capital:</strong> Patna | <strong>Known for:</strong> Pilgrimage and history</div>' },
            { title: 'Heritage', content: '<h2>Heritage</h2><p>It is linked with ancient empires, Nalanda University, Bodh Gaya, and sites sacred to Buddhism and Jainism.</p>' },
            { title: 'Culture', content: '<h2>Culture</h2><p>Festivals like Chhath Puja, Madhubani art, and Bhojpuri traditions reflect the state’s deep cultural identity.</p>' },
            { title: 'Economy', content: '<h2>Economy</h2><p>Agriculture, education, textiles, and food processing form a key part of the state’s development.</p>' },
            { title: 'Highlights', content: '<div class="unique-fact"><span class="fact-title">✨ Special ✨</span>One of India’s oldest cultural heartlands with deep spiritual significance.</div>' }
        ]
    },
    'Chhattisgarh': {
        emoji: '⛏️',
        capital: 'Raipur',
        pages: [
            { title: 'Overview', content: '<h2>Geography</h2><p>Chhattisgarh is a central Indian state rich in mineral resources, forests, and tribal landscapes.</p><div class="stat-box"><strong>Capital:</strong> Raipur | <strong>Known for:</strong> Bastar and minerals</div>' },
            { title: 'Culture', content: '<h2>Culture</h2><p>It has rich tribal traditions, folk dances, temple architecture, and unique local cuisines.</p>' },
            { title: 'Nature', content: '<h2>Nature</h2><p>Chitrakote Falls, Kanger Valley, and forest trails make the state appealing for nature lovers.</p>' },
            { title: 'Economy', content: '<h2>Economy</h2><p>Mining, steel, power generation, and agriculture are major economic pillars.</p>' },
            { title: 'Highlights', content: '<div class="unique-fact"><span class="fact-title">✨ Special ✨</span>Known for tribal heritage, natural beauty, and industrial development.</div>' }
        ]
    },
    'Goa': {
        emoji: '🏖️',
        capital: 'Panaji',
        pages: [
            { title: 'Overview', content: '<h2>Geography</h2><p>Goa is India’s smallest state, known for beaches, lush hills, and a unique blend of Indian and Portuguese culture.</p><div class="stat-box"><strong>Capital:</strong> Panaji | <strong>Coastline:</strong> Arabian Sea</div>' },
            { title: 'Culture', content: '<h2>Culture</h2><p>Goa combines Konkani traditions with Portuguese heritage, featured in festivals, churches, music, and food.</p>' },
            { title: 'Tourism', content: '<h2>Tourism</h2><p>The beaches of Baga, Palolem, and Calangute attract millions of visitors each year.</p>' },
            { title: 'Economy', content: '<h2>Economy</h2><p>Tourism, casino hospitality, seafood, and mining have historically shaped the local economy.</p>' },
            { title: 'Highlights', content: '<div class="unique-fact"><span class="fact-title">✨ Special ✨</span>Famous for beaches, churches, seafood, and a lively coastal culture.</div>' }
        ]
    },
    'Gujarat': {
        emoji: '🏜️',
        capital: 'Gandhinagar',
        pages: [
            { title: 'Overview', content: '<h2>Geography</h2><p>Gujarat spans the northwest and includes deserts, coastlines, ports, and a strong industrial base.</p><div class="stat-box"><strong>Capital:</strong> Gandhinagar | <strong>Known for:</strong> Business and heritage</div>' },
            { title: 'Culture', content: '<h2>Culture</h2><p>Gujarati culture is rooted in community life, folk dance, handcrafts, and rich traditions of hospitality.</p>' },
            { title: 'Heritage', content: '<h2>Heritage</h2><p>The state is known for stepwells, temple architecture, and the historical city of Ahmedabad.</p>' },
            { title: 'Economy', content: '<h2>Economy</h2><p>Gujarat is a major industrial and trade center with strong growth in petrochemicals, ports, and manufacturing.</p>' },
            { title: 'Highlights', content: '<div class="unique-fact"><span class="fact-title">✨ Special ✨</span>Home to the Statue of Unity, vibrant festivals, and strong entrepreneurship.</div>' }
        ]
    },
    'Haryana': {
        emoji: '🏛️',
        capital: 'Chandigarh',
        pages: [
            { title: 'Overview', content: '<h2>Geography</h2><p>Haryana lies in north India and is one of the most agriculturally productive states in the country.</p><div class="stat-box"><strong>Capital:</strong> Chandigarh | <strong>Known for:</strong> Agriculture and industry</div>' },
            { title: 'Culture', content: '<h2>Culture</h2><p>It shares deep ties with the Indo-Gangetic traditions and celebrates regional fairs, folk music, and rural festivals.</p>' },
            { title: 'Economy', content: '<h2>Economy</h2><p>Haryana is well known for industrial corridors, food processing, and agricultural output.</p>' },
            { title: 'Cities', content: '<h2>Cities</h2><p>Gurugram, Faridabad, and Panipat are important urban and industrial centers in the state.</p>' },
            { title: 'Highlights', content: '<div class="unique-fact"><span class="fact-title">✨ Special ✨</span>A major contributor to India’s agricultural and industrial growth.</div>' }
        ]
    },
    'Himachal Pradesh': {
        emoji: '🏔️',
        capital: 'Shimla',
        pages: [
            { title: 'Overview', content: '<h2>Geography</h2><p>Himachal Pradesh is a scenic Himalayan state with hill stations, valleys, and alpine forests.</p><div class="stat-box"><strong>Capital:</strong> Shimla | <strong>Known for:</strong> Mountains</div>' },
            { title: 'Culture', content: '<h2>Culture</h2><p>Local traditions, Buddhist monasteries, and hill communities shape the identity of the state.</p>' },
            { title: 'Tourism', content: '<h2>Tourism</h2><p>Shimla, Manali, Dharamshala, and Kullu attract tourists from all over the world.</p>' },
            { title: 'Economy', content: '<h2>Economy</h2><p>Tourism, hydropower, horticulture, and handicrafts are major contributors.</p>' },
            { title: 'Highlights', content: '<div class="unique-fact"><span class="fact-title">✨ Special ✨</span>A favorite hill destination with snow-clad peaks and monasteries.</div>' }
        ]
    },
    'Jharkhand': {
        emoji: '⛏️',
        capital: 'Ranchi',
        pages: [
            { title: 'Overview', content: '<h2>Geography</h2><p>Jharkhand is a mineral-rich state in eastern India, known for forests, plateaus, and tribal heritage.</p><div class="stat-box"><strong>Capital:</strong> Ranchi | <strong>Known for:</strong> Minerals and forests</div>' },
            { title: 'Culture', content: '<h2>Culture</h2><p>It is a stronghold of tribal traditions, folk music, and vibrant festivals across many communities.</p>' },
            { title: 'Economy', content: '<h2>Economy</h2><p>Mining, steel, power generation, and agriculture support the state’s economy.</p>' },
            { title: 'Tourism', content: '<h2>Tourism</h2><p>Betla National Park, Hundru Falls, and tribal routes offer unique experiences.</p>' },
            { title: 'Highlights', content: '<div class="unique-fact"><span class="fact-title">✨ Special ✨</span>Rich in natural resources and tribal culture, with a strong mineral base.</div>' }
        ]
    },
    'Karnataka': {
        emoji: '🌾',
        capital: 'Bengaluru',
        pages: [
            { title: 'Overview', content: '<h2>Geography</h2><p>Karnataka is a southern state with diverse terrain, including the Western Ghats, plains, and coast.</p><div class="stat-box"><strong>Capital:</strong> Bengaluru | <strong>Known for:</strong> Tech and heritage</div>' },
            { title: 'Culture', content: '<h2>Culture</h2><p>Karnataka is famous for classical music, dance forms like Bharatanatyam-inspired traditions, and temple architecture.</p>' },
            { title: 'Heritage', content: '<h2>Heritage</h2><p>It has historic sites like Hampi, Mysuru Palace, and temple towns across the state.</p>' },
            { title: 'Economy', content: '<h2>Economy</h2><p>Bengaluru, aerospace, IT, manufacturing, and agriculture all play major roles in growth.</p>' },
            { title: 'Highlights', content: '<div class="unique-fact"><span class="fact-title">✨ Special ✨</span>Known for technology, heritage sites, coffee plantations, and vibrant cities.</div>' }
        ]
    },
    'Kerala': {
        emoji: '🌴',
        capital: 'Thiruvananthapuram',
        pages: [
            { title: 'Overview', content: '<h2>Geography</h2><p>Kerala, a coastal state in southwest India, is celebrated for backwaters, beaches, and lush hills.</p><div class="stat-box"><strong>Capital:</strong> Thiruvananthapuram | <strong>Known for:</strong> Backwaters</div>' },
            { title: 'Culture', content: '<h2>Culture</h2><p>Kerala is known for Kathakali, classical music, temple festivals, and strong literary traditions.</p>' },
            { title: 'Tourism', content: '<h2>Tourism</h2><p>Houseboats, hill stations, beaches, and national parks make it a beloved tourist destination.</p>' },
            { title: 'Economy', content: '<h2>Economy</h2><p>It is known for remittances, tourism, spices, coconut cultivation, and healthcare services.</p>' },
            { title: 'Highlights', content: '<div class="unique-fact"><span class="fact-title">✨ Special ✨</span>Famous for backwaters, Ayurveda, and lush tropical landscapes.</div>' }
        ]
    },
    'Madhya Pradesh': {
        emoji: '🏞️',
        capital: 'Bhopal',
        pages: [
            { title: 'Overview', content: '<h2>Geography</h2><p>Madhya Pradesh is central India’s largest state, with forests, rivers, plateaus, and a rich historical heritage.</p><div class="stat-box"><strong>Capital:</strong> Bhopal | <strong>Known for:</strong> Heritage and forests</div>' },
            { title: 'Culture', content: '<h2>Culture</h2><p>The state has a wide range of tribal traditions, folk art, and architectural heritage spanning centuries.</p>' },
            { title: 'Heritage', content: '<h2>Heritage</h2><p>Sites like Khajuraho, Sanchi, and Gwalior are famous for architecture and history.</p>' },
            { title: 'Economy', content: '<h2>Economy</h2><p>Agriculture, mining, power generation, and tourism are key economic strengths.</p>' },
            { title: 'Highlights', content: '<div class="unique-fact"><span class="fact-title">✨ Special ✨</span>Known for ancient monuments, wildlife, and central Indian grandeur.</div>' }
        ]
    },
    'Maharashtra': {
        emoji: '🌆',
        capital: 'Mumbai',
        pages: [
            { title: 'Overview', content: '<h2>Geography</h2><p>Maharashtra is a western state with a coastal line, plateaus, and some of India’s biggest urban centers.</p><div class="stat-box"><strong>Capital:</strong> Mumbai | <strong>Known for:</strong> Finance and culture</div>' },
            { title: 'Culture', content: '<h2>Culture</h2><p>Mumbai, Pune, and the Deccan region contribute to Maharashtra’s rich mix of music, literature, and traditions.</p>' },
            { title: 'Tourism', content: '<h2>Tourism</h2><p>Elephanta Caves, Ajanta, Ellora, and hill stations like Lonavala remain highly celebrated.</p>' },
            { title: 'Economy', content: '<h2>Economy</h2><p>It is one of India’s most industrialized and financially significant states, with major ports and services.</p>' },
            { title: 'Highlights', content: '<div class="unique-fact"><span class="fact-title">✨ Special ✨</span>India’s economic powerhouse with a rich cultural and historic legacy.</div>' }
        ]
    },
    'Manipur': {
        emoji: '🌾',
        capital: 'Imphal',
        pages: [
            { title: 'Overview', content: '<h2>Geography</h2><p>Manipur lies in the northeastern hills and valleys, known for lakes, mountain terrain, and cultural creativity.</p><div class="stat-box"><strong>Capital:</strong> Imphal | <strong>Known for:</strong> Culture and lakes</div>' },
            { title: 'Culture', content: '<h2>Culture</h2><p>Manipuri dance, traditional costume, and seasonal festivals reflect the region’s artistic heritage.</p>' },
            { title: 'Nature', content: '<h2>Nature</h2><p>Loktak Lake and the surrounding hills are iconic scenic landmarks of the state.</p>' },
            { title: 'Economy', content: '<h2>Economy</h2><p>Agriculture, handloom, tourism, and trade are central to the livelihood system.</p>' },
            { title: 'Highlights', content: '<div class="unique-fact"><span class="fact-title">✨ Special ✨</span>Known for its vibrant dance traditions and serene lake landscapes.</div>' }
        ]
    },
    'Meghalaya': {
        emoji: '🌧️',
        capital: 'Shillong',
        pages: [
            { title: 'Overview', content: '<h2>Geography</h2><p>Meghalaya is a hilly northeastern state famous for rainfall, caves, and green landscapes.</p><div class="stat-box"><strong>Capital:</strong> Shillong | <strong>Known for:</strong> Rain and hills</div>' },
            { title: 'Culture', content: '<h2>Culture</h2><p>Its communities celebrate music, agriculture, and ceremonial traditions rooted in local identity.</p>' },
            { title: 'Tourism', content: '<h2>Tourism</h2><p>Root bridges, caves, waterfalls, and scenic viewpoints make it a favorite destination.</p>' },
            { title: 'Economy', content: '<h2>Economy</h2><p>Agriculture, tourism, horticulture, and services support the local economy.</p>' },
            { title: 'Highlights', content: '<div class="unique-fact"><span class="fact-title">✨ Special ✨</span>One of India’s wettest regions, with living root bridges and rich biodiversity.</div>' }
        ]
    },
    'Mizoram': {
        emoji: '🌿',
        capital: 'Aizawl',
        pages: [
            { title: 'Overview', content: '<h2>Geography</h2><p>Mizoram is a hill state in the northeast, noted for its forests, mountains, and unique tribal heritage.</p><div class="stat-box"><strong>Capital:</strong> Aizawl | <strong>Known for:</strong> Hills and culture</div>' },
            { title: 'Culture', content: '<h2>Culture</h2><p>Mizo traditions, bamboo crafts, folk dances, and celebrations reflect a strong community spirit.</p>' },
            { title: 'Nature', content: '<h2>Nature</h2><p>Dense forests, hill slopes, and scenic valleys define the beauty of the state.</p>' },
            { title: 'Economy', content: '<h2>Economy</h2><p>Horticulture, bamboo products, agriculture, and tourism are key features.</p>' },
            { title: 'Highlights', content: '<div class="unique-fact"><span class="fact-title">✨ Special ✨</span>Known for its scenic beauty, Mizo identity, and vibrant craft traditions.</div>' }
        ]
    },
    'Nagaland': {
        emoji: '🏔️',
        capital: 'Kohima',
        pages: [
            { title: 'Overview', content: '<h2>Geography</h2><p>Nagaland is a mountainous northeastern state known for its steep ridges, forests, and tribal culture.</p><div class="stat-box"><strong>Capital:</strong> Kohima | <strong>Known for:</strong> Tribes and mountains</div>' },
            { title: 'Culture', content: '<h2>Culture</h2><p>It celebrates traditional dances, festivals, and headgear-rich cultural identity across Naga communities.</p>' },
            { title: 'Heritage', content: '<h2>Heritage</h2><p>Historic sites and village traditions preserve deep local memory and identity.</p>' },
            { title: 'Economy', content: '<h2>Economy</h2><p>Agriculture, forestry, small businesses, and tourism sustain livelihoods.</p>' },
            { title: 'Highlights', content: '<div class="unique-fact"><span class="fact-title">✨ Special ✨</span>Known for colorful festivals, tribal heritage, and breathtaking mountain scenery.</div>' }
        ]
    },
    'Odisha': {
        emoji: '🏛️',
        capital: 'Bhubaneswar',
        pages: [
            { title: 'Overview', content: '<h2>Geography</h2><p>Odisha is an eastern coastal state with river plains, fertile lands, and historical monuments.</p><div class="stat-box"><strong>Capital:</strong> Bhubaneswar | <strong>Known for:</strong> Temple heritage</div>' },
            { title: 'Culture', content: '<h2>Culture</h2><p>Odisha is famous for classical dance, temple architecture, festivals, and handcrafted art forms.</p>' },
            { title: 'Heritage', content: '<h2>Heritage</h2><p>Konark Sun Temple, Puri, and ancient Odisha temples are among India’s iconic cultural landmarks.</p>' },
            { title: 'Economy', content: '<h2>Economy</h2><p>Mining, steel, agriculture, and tourism are major pillars of the state economy.</p>' },
            { title: 'Highlights', content: '<div class="unique-fact"><span class="fact-title">✨ Special ✨</span>Known for temples, dance, craftsmanship, and the Jagannath tradition.</div>' }
        ]
    },
    'Punjab': {
        emoji: '🌾',
        capital: 'Chandigarh',
        pages: [
            { title: 'Overview', content: '<h2>Geography</h2><p>Punjab is a northwestern state known for fertile plains, rivers, agriculture, and strong cultural identity.</p><div class="stat-box"><strong>Capital:</strong> Chandigarh | <strong>Known for:</strong> Agriculture</div>' },
            { title: 'Culture', content: '<h2>Culture</h2><p>Punjabi culture shines through music, dance, langar traditions, and festive celebrations.</p>' },
            { title: 'Heritage', content: '<h2>Heritage</h2><p>It has deep historical resonance with Sikh pilgrimage sites and strong regional traditions.</p>' },
            { title: 'Economy', content: '<h2>Economy</h2><p>Agriculture, food processing, industry, and transport are major economic drivers.</p>' },
            { title: 'Highlights', content: '<div class="unique-fact"><span class="fact-title">✨ Special ✨</span>Known for wheat fields, vibrant festivals, and generous cultural spirit.</div>' }
        ]
    },
    'Rajasthan': {
        emoji: '🏰',
        capital: 'Jaipur',
        pages: [
            { title: 'Overview', content: '<h2>Geography</h2><p>Rajasthan is India’s largest state by area, marked by deserts, forts, and historical cities.</p><div class="stat-box"><strong>Capital:</strong> Jaipur | <strong>Known for:</strong> Desert heritage</div>' },
            { title: 'Culture', content: '<h2>Culture</h2><p>It is famous for royal palaces, folk music, desert festivals, jewelry, and colorful attire.</p>' },
            { title: 'Heritage', content: '<h2>Heritage</h2><p>Jaipur, Jodhpur, Udaipur, and Jaisalmer hold iconic forts, havelis, and palaces.</p>' },
            { title: 'Tourism', content: '<h2>Tourism</h2><p>The state is a major tourism destination for heritage travel, desert safaris, and weddings.</p>' },
            { title: 'Highlights', content: '<div class="unique-fact"><span class="fact-title">✨ Special ✨</span>Known for royals, forts, desert landscapes, and vibrant traditions.</div>' }
        ]
    },
    'Sikkim': {
        emoji: '🌄',
        capital: 'Gangtok',
        pages: [
            { title: 'Overview', content: '<h2>Geography</h2><p>Sikkim is a small northeastern Himalayan state known for alpine landscapes, monasteries, and biodiversity.</p><div class="stat-box"><strong>Capital:</strong> Gangtok | <strong>Known for:</strong> Himalayas</div>' },
            { title: 'Culture', content: '<h2>Culture</h2><p>It is shaped by Buddhist influences, local festivals, and a peaceful mountain lifestyle.</p>' },
            { title: 'Tourism', content: '<h2>Tourism</h2><p>Tsomgo Lake, Nathula Pass, and monasteries are major drawcards for visitors.</p>' },
            { title: 'Economy', content: '<h2>Economy</h2><p>Tourism, hydropower, agriculture, and small-scale trade are central to the state.</p>' },
            { title: 'Highlights', content: '<div class="unique-fact"><span class="fact-title">✨ Special ✨</span>Known for clean mountain scenery, monasteries, and Himalayan beauty.</div>' }
        ]
    },
    'Tamil Nadu': {
        emoji: '🛕',
        capital: 'Chennai',
        pages: [
            { title: 'Overview', content: '<h2>Geography</h2><p>Tamil Nadu is a southern state with a long coastline, fertile plains, and a rich legacy of temple culture.</p><div class="stat-box"><strong>Capital:</strong> Chennai | <strong>Known for:</strong> Temples and arts</div>' },
            { title: 'Culture', content: '<h2>Culture</h2><p>Classical music, Bharatanatyam, temple festivals, and Tamil literature define its identity.</p>' },
            { title: 'Heritage', content: '<h2>Heritage</h2><p>From Madurai to Mahabalipuram, the state is filled with architectural wonders and historic sites.</p>' },
            { title: 'Economy', content: '<h2>Economy</h2><p>Manufacturing, technology, automotive industries, and agriculture are strengths of the state.</p>' },
            { title: 'Highlights', content: '<div class="unique-fact"><span class="fact-title">✨ Special ✨</span>Known for ancient temples, classical arts, and dynamic urban growth.</div>' }
        ]
    },
    'Telangana': {
        emoji: '🦁',
        capital: 'Hyderabad',
        pages: [
            { title: 'Overview', content: '<h2>Geography</h2><p>Telangana is a southern state with a mix of Deccan plateau, heritage cities, and changing urban landscapes.</p><div class="stat-box"><strong>Capital:</strong> Hyderabad | <strong>Known for:</strong> Heritage and technology</div>' },
            { title: 'Culture', content: '<h2>Culture</h2><p>Hyderabad, Golconda, and Deccan traditions give the state a famous blend of architecture and cuisine.</p>' },
            { title: 'Heritage', content: '<h2>Heritage</h2><p>Its historic sites and monuments reflect the influence of Nizams, dynasties, and regional art.</p>' },
            { title: 'Economy', content: '<h2>Economy</h2><p>Trade, pharmaceuticals, IT, and agriculture are major contributors to economic growth.</p>' },
            { title: 'Highlights', content: '<div class="unique-fact"><span class="fact-title">✨ Special ✨</span>Known for Hyderabad biryani, heritage sites, and modern innovation.</div>' }
        ]
    },
    'Tripura': {
        emoji: '🌿',
        capital: 'Agartala',
        pages: [
            { title: 'Overview', content: '<h2>Geography</h2><p>Tripura is a northeastern state marked by hilly terrain, forest cover, and a rich tribal heritage.</p><div class="stat-box"><strong>Capital:</strong> Agartala | <strong>Known for:</strong> Forests and culture</div>' },
            { title: 'Culture', content: '<h2>Culture</h2><p>Its communities celebrate dance, craftsmanship, and local rituals with a strong sense of identity.</p>' },
            { title: 'Tourism', content: '<h2>Tourism</h2><p>The state is known for palaces, temples, waterfalls, and scenic natural landscapes.</p>' },
            { title: 'Economy', content: '<h2>Economy</h2><p>Agriculture, tourism, and trade are central to the state economy.</p>' },
            { title: 'Highlights', content: '<div class="unique-fact"><span class="fact-title">✨ Special ✨</span>Blends natural beauty with vibrant tribal traditions and royal heritage.</div>' }
        ]
    },
    'Uttar Pradesh': {
        emoji: '🕌',
        capital: 'Lucknow',
        pages: [
            { title: 'Overview', content: '<h2>Geography</h2><p>Uttar Pradesh is India’s most populous state, shaped by the Ganga plain, historic cities, and rich agriculture.</p><div class="stat-box"><strong>Capital:</strong> Lucknow | <strong>Known for:</strong> Heritage and faith</div>' },
            { title: 'Culture', content: '<h2>Culture</h2><p>The state is central to many traditions, languages, saints, and historic cultural movements in India.</p>' },
            { title: 'Heritage', content: '<h2>Heritage</h2><p>Varanasi, Agra, Ayodhya, and Lucknow are landmarks of faith, architecture, and history.</p>' },
            { title: 'Economy', content: '<h2>Economy</h2><p>Agriculture, trade, manufacturing, and services make it one of India’s major economic regions.</p>' },
            { title: 'Highlights', content: '<div class="unique-fact"><span class="fact-title">✨ Special ✨</span>Home to iconic pilgrimage sites, world heritage landmarks, and dense cultural traditions.</div>' }
        ]
    },
    'Uttarakhand': {
        emoji: '🏔️',
        capital: 'Dehradun',
        pages: [
            { title: 'Overview', content: '<h2>Geography</h2><p>Uttarakhand lies in the Himalayas and is known for rivers, hill stations, pilgrimage routes, and forests.</p><div class="stat-box"><strong>Capital:</strong> Dehradun | <strong>Known for:</strong> Peaks and rivers</div>' },
            { title: 'Culture', content: '<h2>Culture</h2><p>It reflects Himalayan traditions, spiritual heritage, and local festivals rooted in the mountains.</p>' },
            { title: 'Tourism', content: '<h2>Tourism</h2><p>Haridwar, Rishikesh, Kedarnath, and Mussoorie are among its most famous destinations.</p>' },
            { title: 'Economy', content: '<h2>Economy</h2><p>Tourism, hydropower, agriculture, and forest-based livelihoods are key drivers.</p>' },
            { title: 'Highlights', content: '<div class="unique-fact"><span class="fact-title">✨ Special ✨</span>A spiritual and natural Himalayan state rich in pilgrimage and adventure tourism.</div>' }
        ]
    },
    'West Bengal': {
        emoji: '🌊',
        capital: 'Kolkata',
        pages: [
            { title: 'Overview', content: '<h2>Geography</h2><p>West Bengal is a eastern state with the Himalayas to the north, a broad delta, and a vibrant cultural identity.</p><div class="stat-box"><strong>Capital:</strong> Kolkata | <strong>Known for:</strong> Culture and rivers</div>' },
            { title: 'Culture', content: '<h2>Culture</h2><p>It is a center of literature, art, folk traditions, Durga Puja, and intellectual life.</p>' },
            { title: 'Heritage', content: '<h2>Heritage</h2><p>It has a remarkable colonial history, artistic movements, and a strong legacy of urban culture.</p>' },
            { title: 'Economy', content: '<h2>Economy</h2><p>Industry, trade, agriculture, and services make it one of the most significant states in eastern India.</p>' },
            { title: 'Highlights', content: '<div class="unique-fact"><span class="fact-title">✨ Special ✨</span>Famous for Kolkata, river culture, literature, and festival grandeur.</div>' }
        ]
    }
};
