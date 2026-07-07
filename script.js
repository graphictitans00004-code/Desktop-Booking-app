// =========================================================================
// MOCK DESTINATIONS DATABASE
// =========================================================================
const DESTINATIONS = [
    {
        id: "uluwatu",
        title: "Uluwatu",
        location: "Badung Regency, Bali",
        image: "images/uluwatu.png",
        rating: 4.9,
        slotsLeft: 4,
        price: 530,
        type: "Open Trip",
        category: "retreat",
        activity: "Surf",
        dateText: "12-14 August",
        dateVal: "august",
        accommodation: "Tropic Lakeside Villa",
        transport: "Private driver",
        meals: "Full board",
        description: "Rejuvenate on the majestic cliffs of southern Bali. This trip is designed for those looking to combine surfing, yoga, and cliffside dinners. Wake up to ocean breezes and end your days watching the sunset from the iconic Uluwatu Temple cliffs.",
        schedule: [
            { day: "Day 1", title: "Arrival & Sunset Welcome", desc: "Airport pick up, check-in to Tropic Lakeside Villa, and a sunset dinner overlooking the Uluwatu waves." },
            { day: "Day 2", title: "Surf Session & Cliff Walk", desc: "Morning surf coaching suitable for all levels, followed by a cultural cliffside walk to Uluwatu Temple." },
            { day: "Day 3", title: "Yoga Flow & Departure", desc: "Restorative morning yoga, healthy brunch, and private driver transport back to the airport." }
        ]
    },
    {
        id: "toba-lake",
        title: "Toba Lake",
        location: "Sumatra, Indonesia",
        image: "images/tobalake.png",
        rating: 4.8,
        slotsLeft: 5,
        price: 480,
        type: "Private",
        category: "stay",
        activity: "Culture",
        dateText: "Request based",
        dateVal: "anytime",
        accommodation: "Lakehouse Lodge",
        transport: "Private driver",
        meals: "Breakfast included",
        description: "Escape to one of the world's largest volcanic lakes. Settle into a traditional Batak-style wooden lodge right on the water. Kayak in the morning mist, explore local villages on Samosir island, and experience Sumatra's calm side.",
        schedule: [
            { day: "Day 1", title: "Volcanic Crossing", desc: "Private drive from Medan to Lake Toba, scenic ferry crossing to Samosir Island, and lodge check-in." },
            { day: "Day 2", title: "Island Culture & Kayaking", desc: "Paddle on calm lake waters, visit the ancient Batak stone chair village, and enjoy a fresh lake fish BBQ." },
            { day: "Day 3", title: "Pine Forest Trek & Return", desc: "Light morning trek through the pine woods, panorama views of the caldera, and return transport." }
        ]
    },
    {
        id: "sumba-adventure",
        title: "Sumba Adventure",
        location: "West Sumba, Indonesia",
        image: "images/sumba.png",
        rating: 4.9,
        slotsLeft: 2,
        price: 550,
        type: "Open Trip",
        category: "adventure",
        activity: "Cycling",
        dateText: "12-14 August",
        dateVal: "august",
        accommodation: "Eco Surf Resort",
        transport: "Private driver",
        meals: "Full board",
        description: "Explore the wild grasslands and pristine coastlines of Sumba. Famous for its traditional villages, megalithic tombs, and untouched beaches, Sumba is a dream for adventurous travelers wanting to explore off the beaten path.",
        schedule: [
            { day: "Day 1", title: "Into the Wild Sumba", desc: "Airport transfer, travel through rolling green hills to the Eco Surf Resort, followed by dinner under the stars." },
            { day: "Day 2", title: "Village Walk & Secret Waterfall", desc: "Visit traditional thatched-roof villages, meet local weavers, and trek to a turquoise jungle waterfall." },
            { day: "Day 3", title: "Sunrise Coast Ride & Farewell", desc: "Early morning cycling along Sumba's flat beaches, check-out, and drive back to the airport." }
        ]
    },
    {
        id: "kazakhstan-yurts",
        title: "Kazakhstan Yurts",
        location: "Almaty Region, Kazakhstan",
        image: "images/hero.png",
        rating: 4.9,
        slotsLeft: 3,
        price: 620,
        type: "Open Trip",
        category: "adventure",
        activity: "Cycling",
        dateText: "12-14 August",
        dateVal: "august",
        accommodation: "Traditional Yurt Camp",
        transport: "Group transfer",
        meals: "Full board",
        description: "Live like a nomad in the vast mountain steppes of Kazakhstan. Stay in authentic felt yurts, eat local meals prepared by host families, and hike through the dramatic Charyn Canyon and Kolsai Lakes.",
        schedule: [
            { day: "Day 1", title: "Steppe Arrival", desc: "Group transfer from Almaty, drive through the Tian Shan foothills, and check-in to the Yurt Camp." },
            { day: "Day 2", title: "Canyon Hiking & Horse Riding", desc: "Guided hike through Charyn Canyon, picnic in the valley, and optional horse riding with local guides." },
            { day: "Day 3", title: "Alpine Lake Hike & Return", desc: "Morning visit to Kolsai Lake, mountain photo walk, and return drive to Almaty city." }
        ]
    },
    {
        id: "bangli-bali",
        title: "Bangli, East Bali",
        location: "Cultural Walk, Bali",
        image: "images/bangli.png",
        rating: 4.7,
        slotsLeft: 6,
        price: 450,
        type: "Private",
        category: "retreat",
        activity: "Yoga",
        dateText: "Request based",
        dateVal: "anytime",
        accommodation: "Bamboo Valley Villa",
        transport: "Private driver",
        meals: "Full board",
        description: "An intimate dive into Bali's spiritual heartland. Walk through undisturbed bamboo forests, step into local family compounds, learn traditional crafts, and practice yoga overlooking lush green valley walls.",
        schedule: [
            { day: "Day 1", title: "Village Welcome", desc: "Driver pick up, check-in to our bamboo-built eco-villas, and a traditional blessing ceremony." },
            { day: "Day 2", title: "Bamboo Forest Walk & Craft", desc: "A guided hike through green bamboo paths, coconut oil making workshop, and healthy local lunch." },
            { day: "Day 3", title: "Sunrise Meditation & Spa", desc: "Sunrise yoga and meditation session, relaxing Balinese massage, and transfer to your next location." }
        ]
    }
];

// =========================================================================
// DOM SELECTORS
// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
    // Nav elements
    const mainHeader = document.getElementById("main-header");
    const mobileNavToggle = document.getElementById("mobile-nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navSearchInput = document.getElementById("nav-search-input");
    
    // Carousel elements
    const carouselTrack = document.getElementById("carousel-track");
    const carouselPrev = document.getElementById("carousel-prev");
    const carouselNext = document.getElementById("carousel-next");
    
    // Timeline elements
    const timelineNodes = document.querySelectorAll(".timeline-node");
    const timelineTracker = document.querySelector(".timeline-tracker");
    
    // Filter controls
    const heroExploreBtn = document.getElementById("hero-explore-btn");
    const filterDiscoverBtn = document.getElementById("filter-discover-btn");
    const resetFilterBtn = document.getElementById("reset-filter-btn");
    
    // Filter input values
    const filterDest = document.getElementById("filter-destination");
    const filterCat = document.getElementById("filter-category");
    const filterPrice = document.getElementById("filter-price");
    const filterDate = document.getElementById("filter-date");
    
    // Hero selectors
    const heroSelectActivity = document.getElementById("hero-select-activity");
    const heroSelectLocation = document.getElementById("hero-select-location");
    const heroSelectDuration = document.getElementById("hero-select-duration");
    const heroSelectBudget = document.getElementById("hero-select-budget");
    
    // Grid containers
    const destinationsGrid = document.getElementById("destinations-grid");
    const emptyGridState = document.getElementById("empty-grid-state");
    
    // Modals
    const quizDialog = document.getElementById("quiz-dialog");
    const bookingDialog = document.getElementById("booking-dialog");
    const detailsDialog = document.getElementById("details-dialog");
    
    // Quiz selectors
    const quizTriggers = document.querySelectorAll(".quiz-trigger");
    const quizCloseBtn = document.getElementById("quiz-close-btn");
    const quizBackBtn = document.getElementById("quiz-back-btn");
    const quizStepCounter = document.getElementById("quiz-step-counter");
    const quizProgressFill = document.getElementById("quiz-progress-fill");
    const quizSteps = document.querySelectorAll(".quiz-step");
    const quizOptions = document.querySelectorAll(".quiz-option");
    
    // Booking Form selectors
    const bookingTriggers = document.querySelectorAll(".booking-trigger");
    const bookingCloseBtn = document.getElementById("booking-close-btn");
    const bookingForm = document.getElementById("trip-booking-form");
    const bookingDestSelect = document.getElementById("booking-dest-select");
    const bookingSuccessMessage = document.getElementById("booking-success-message");
    const closeSuccessBtn = document.getElementById("close-success-btn");
    
    // Details selectors
    const detailsCloseBtn = document.getElementById("details-close-btn");
    const detailsContent = document.getElementById("details-content");
    const detailsTitle = document.getElementById("details-title");

    // =========================================================================
    // INITIALIZATION
    // =========================================================================
    populateBookingDropdown();
    renderDestinations(DESTINATIONS);
    updateTimelineTracker();

    // =========================================================================
    // HEADER & MOBILE MENU LOGIC
    // =========================================================================
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            mainHeader.classList.add("scrolled");
        } else {
            mainHeader.classList.remove("scrolled");
        }
        updateTimelineTracker();
    });

    mobileNavToggle.addEventListener("click", () => {
        mobileNavToggle.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Close mobile nav on link click
    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
            mobileNavToggle.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });

    // =========================================================================
    // RENDER DESTINATION CARDS
    // =========================================================================
    function renderDestinations(items) {
        destinationsGrid.innerHTML = "";
        
        if (items.length === 0) {
            destinationsGrid.style.display = "none";
            emptyGridState.style.display = "block";
            return;
        }
        
        destinationsGrid.style.display = "grid";
        emptyGridState.style.display = "none";

        items.forEach(dest => {
            const card = document.createElement("div");
            card.className = "destination-card";
            card.id = `card-${dest.id}`;
            
            const isLowSlots = dest.slotsLeft <= 3 ? "low-slots" : "";
            
            card.innerHTML = `
                <div class="card-img-wrapper">
                    <img src="${dest.image}" alt="${dest.title}" loading="lazy">
                    <span class="rating-badge">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        ${dest.rating}
                    </span>
                    <span class="card-tag ${isLowSlots}">${dest.slotsLeft} Slots left</span>
                    <span class="trip-type-tag">${dest.type}</span>
                </div>
                <div class="card-details-panel">
                    <div class="card-header-row">
                        <div class="card-loc-title">
                            <h3>${dest.title}</h3>
                            <p>${dest.location}</p>
                        </div>
                        <div class="card-price-info">
                            <div class="price-val">$${dest.price}</div>
                            <div class="price-lbl">per seat</div>
                        </div>
                    </div>
                    <div class="card-meta-row">
                        <div class="card-meta-item">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            <span>${dest.dateText}</span>
                        </div>
                        <div class="card-meta-item">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <span>3 Days</span>
                        </div>
                    </div>
                    <ul class="amenities-list">
                        <li class="amenity-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                            <span class="amenity-label">Stay:</span>
                            <span class="amenity-value">${dest.accommodation}</span>
                        </li>
                        <li class="amenity-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                <rect x="1" y="3" width="15" height="13" rx="2" ry="2"></rect>
                                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                                <circle cx="18.5" cy="18.5" r="2.5"></circle>
                            </svg>
                            <span class="amenity-label">Transport:</span>
                            <span class="amenity-value">${dest.transport}</span>
                        </li>
                        <li class="amenity-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                            </svg>
                            <span class="amenity-label">Meals:</span>
                            <span class="amenity-value">${dest.meals}</span>
                        </li>
                    </ul>
                    <div class="card-actions">
                        <button class="zoom-btn" data-id="${dest.id}" aria-label="View Details">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                <line x1="11" y1="8" x2="11" y2="14"></line>
                                <line x1="8" y1="11" x2="14" y2="11"></line>
                            </svg>
                        </button>
                        <button class="book-card-btn" data-id="${dest.id}">Book Trip</button>
                    </div>
                </div>
            `;
            destinationsGrid.appendChild(card);
        });

        // Add listeners to generated buttons
        document.querySelectorAll(".zoom-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const id = e.currentTarget.getAttribute("data-id");
                openDetailsModal(id);
            });
        });

        document.querySelectorAll(".book-card-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const id = e.currentTarget.getAttribute("data-id");
                openBookingModal(id);
            });
        });
    }

    // =========================================================================
    // DYNAMIC FILTER SYSTEM
    // =========================================================================
    function applyFilters() {
        const destQuery = filterDest.value.toLowerCase().trim();
        const categoryVal = filterCat.value;
        const priceVal = filterPrice.value;
        const dateVal = filterDate.value;

        const filtered = DESTINATIONS.filter(item => {
            // Destination Text match
            const matchDest = !destQuery || 
                item.title.toLowerCase().includes(destQuery) || 
                item.location.toLowerCase().includes(destQuery);
            
            // Category Dropdown
            const matchCat = categoryVal === "all" || item.category === categoryVal;
            
            // Price Range
            let matchPrice = true;
            if (priceVal === "500") {
                matchPrice = item.price < 500;
            } else if (priceVal === "550") {
                matchPrice = item.price >= 500 && item.price <= 600;
            } else if (priceVal === "high") {
                matchPrice = item.price > 600;
            }
            
            // Date Filter
            const matchDate = dateVal === "all" || item.dateVal === dateVal;

            return matchDest && matchCat && matchPrice && matchDate;
        });

        renderDestinations(filtered);
    }

    // Connect event listeners to filter bar controls
    filterDiscoverBtn.addEventListener("click", applyFilters);
    filterDest.addEventListener("keyup", applyFilters);
    filterCat.addEventListener("change", applyFilters);
    filterPrice.addEventListener("change", applyFilters);
    filterDate.addEventListener("change", applyFilters);
    
    resetFilterBtn.addEventListener("click", () => {
        filterDest.value = "";
        filterCat.value = "all";
        filterPrice.value = "all";
        filterDate.value = "all";
        renderDestinations(DESTINATIONS);
    });

    // Nav Bar Live Search Connection
    navSearchInput.addEventListener("input", (e) => {
        const val = e.target.value;
        filterDest.value = val;
        applyFilters();
        
        // Auto-scroll to pick the place if they type in navbar
        const section = document.getElementById("pick-the-place");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    });

    // Hero Search Explore Button Action
    heroExploreBtn.addEventListener("click", () => {
        // Read Hero inputs
        const heroActivity = heroSelectActivity.value;
        const heroLocation = heroSelectLocation.value;
        const heroDuration = heroSelectDuration.value;
        const heroBudget = heroSelectBudget.value;

        // Map Hero selections to main filter parameters
        
        // 1. Destination Mapping
        if (heroLocation !== "any") {
            filterDest.value = heroLocation;
        } else {
            filterDest.value = "";
        }

        // 2. Category Mapping
        if (heroActivity === "Yoga" || heroActivity === "Culture") {
            filterCat.value = "retreat";
        } else if (heroActivity === "Surf") {
            filterCat.value = "stay";
        } else if (heroActivity === "Cycling") {
            filterCat.value = "adventure";
        } else {
            filterCat.value = "all";
        }

        // 3. Price Mapping
        if (heroBudget === "low") {
            filterPrice.value = "500";
        } else if (heroBudget === "mid") {
            filterPrice.value = "550";
        } else if (heroBudget === "high") {
            filterPrice.value = "high";
        } else {
            filterPrice.value = "all";
        }

        // 4. Date Mapping
        if (heroDuration === "short" || heroDuration === "mid") {
            filterDate.value = "august";
        } else if (heroDuration === "long") {
            filterDate.value = "anytime";
        } else {
            filterDate.value = "all";
        }

        // Run final filter & scroll down
        applyFilters();
        const section = document.getElementById("pick-the-place");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    });

    // =========================================================================
    // VALUES SECTION CAROUSEL LOGIC
    // =========================================================================
    let isDown = false;
    let startX;
    let scrollLeft;
    let curSlideIdx = 0;

    carouselTrack.style.transform = `translateX(0px)`;

    function getSlideWidths() {
        const cards = document.querySelectorAll(".carousel-card");
        let width = 0;
        cards.forEach((c, idx) => {
            if(idx < curSlideIdx) {
                // width + gap
                width += c.offsetWidth + 30; 
            }
        });
        return width;
    }

    function scrollCarousel(direction) {
        const cards = document.querySelectorAll(".carousel-card");
        if (direction === "next" && curSlideIdx < cards.length - 1) {
            curSlideIdx++;
        } else if (direction === "prev" && curSlideIdx > 0) {
            curSlideIdx--;
        }
        
        const offsetVal = getSlideWidths();
        carouselTrack.style.transform = `translateX(-${offsetVal}px)`;
    }

    carouselNext.addEventListener("click", () => scrollCarousel("next"));
    carouselPrev.addEventListener("click", () => scrollCarousel("prev"));

    // Mouse drag support for Carousel
    carouselTrack.addEventListener("mousedown", (e) => {
        isDown = true;
        carouselTrack.classList.add("active");
        startX = e.pageX - carouselTrack.offsetLeft;
        const matrix = new DOMMatrix(window.getComputedStyle(carouselTrack).transform);
        scrollLeft = matrix.m41;
    });

    carouselTrack.addEventListener("mouseleave", () => {
        isDown = false;
    });

    carouselTrack.addEventListener("mouseup", () => {
        isDown = false;
    });

    carouselTrack.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carouselTrack.offsetLeft;
        const walk = (x - startX) * 1.5; // multiplier for speed
        let finalTranslate = scrollLeft + walk;
        
        // Bounds checking
        if (finalTranslate > 0) finalTranslate = 0;
        const maxScroll = -((carouselTrack.scrollWidth) - carouselTrack.parentElement.offsetWidth);
        if (finalTranslate < maxScroll) finalTranslate = maxScroll;

        carouselTrack.style.transform = `translateX(${finalTranslate}px)`;
    });

    // =========================================================================
    // CUSTOM TIMELINE SCROLL LOGIC
    // =========================================================================
    function updateTimelineTracker() {
        const sections = ["hero-section", "our-values", "pick-the-place", "footer"];
        let activeIdx = 0;
        
        sections.forEach((id, idx) => {
            const sec = document.getElementById(id);
            if (sec) {
                const rect = sec.getBoundingClientRect();
                // If section is visible or partially in view
                if (rect.top <= window.innerHeight / 2) {
                    activeIdx = idx;
                }
            }
        });

        // Map index to percentage of timeline line (0%, 33%, 66%, 100%)
        const percentages = [0, 33, 66, 100];
        const pct = percentages[activeIdx];
        
        timelineTracker.style.left = `${pct}%`;
        
        // Add active classes to nodes
        timelineNodes.forEach((node, idx) => {
            if (idx <= activeIdx) {
                node.style.background = "var(--primary)";
                node.style.borderColor = "var(--primary)";
            } else {
                node.style.background = "var(--border-color)";
                node.style.borderColor = "var(--bg-primary)";
            }
        });
    }

    // Click nodes to scroll to section
    timelineNodes.forEach(node => {
        node.addEventListener("click", () => {
            const targetId = node.getAttribute("data-target");
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // =========================================================================
    // NATIVE DIALOGS CONTROL
    // =========================================================================
    
    // General Dialog Helper
    function openModal(dialog) {
        dialog.showModal();
        document.body.style.overflow = "hidden"; // Prevent background scrolling
    }

    function closeModal(dialog) {
        dialog.close();
        document.body.style.overflow = ""; // Enable background scrolling
    }

    // Handle clicks outside of dialog windows to close them
    [quizDialog, bookingDialog, detailsDialog].forEach(dialog => {
        dialog.addEventListener("click", (e) => {
            const rect = dialog.getBoundingClientRect();
            const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
                                rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
            if (!isInDialog) {
                closeModal(dialog);
            }
        });
    });

    // 1. Details Modal Action
    function openDetailsModal(id) {
        const dest = DESTINATIONS.find(d => d.id === id);
        if (!dest) return;

        detailsTitle.textContent = dest.title;
        detailsContent.innerHTML = `
            <img class="details-hero-img" src="${dest.image}" alt="${dest.title}">
            
            <div class="details-meta-bar">
                <div class="details-meta-item">Price: <strong>$${dest.price}</strong></div>
                <div class="details-meta-item">Rating: <strong>${dest.rating} ★</strong></div>
                <div class="details-meta-item">Group: <strong>${dest.type}</strong></div>
            </div>

            <div class="details-section">
                <h3>About This Journey</h3>
                <p>${dest.description}</p>
            </div>

            <div class="details-section">
                <h3>Vibe & Inclusions</h3>
                <p>Enjoy a premium, highly tailored experience. Accommodated in private boutique rooms, you will have transport provided by our select local partners and full coverage meals.</p>
            </div>

            <div class="details-section">
                <h3>Itinerary Breakdown</h3>
                <ul class="schedule-list">
                    ${dest.schedule.map(s => `
                        <li class="schedule-step">
                            <span class="step-num">${s.day.replace("Day ", "")}</span>
                            <div class="step-info">
                                <h4>${s.title}</h4>
                                <p>${s.desc}</p>
                            </div>
                        </li>
                    `).join('')}
                </ul>
            </div>

            <div class="details-footer-actions">
                <button class="details-book-btn" data-id="${dest.id}">Book this Itinerary</button>
            </div>
        `;

        openModal(detailsDialog);

        // Bind booking button inside details popup
        detailsContent.querySelector(".details-book-btn").addEventListener("click", (e) => {
            closeModal(detailsDialog);
            const bookId = e.target.getAttribute("data-id");
            openBookingModal(bookId);
        });
    }

    detailsCloseBtn.addEventListener("click", () => closeModal(detailsDialog));

    // 2. Booking Modal Action
    function populateBookingDropdown() {
        bookingDestSelect.innerHTML = "";
        DESTINATIONS.forEach(dest => {
            const opt = document.createElement("option");
            opt.value = dest.id;
            opt.textContent = `${dest.title} (${dest.location}) - $${dest.price}`;
            bookingDestSelect.appendChild(opt);
        });
    }

    function openBookingModal(destId = "") {
        // Reset form and UI state
        bookingForm.style.display = "flex";
        bookingSuccessMessage.style.display = "none";
        bookingForm.reset();

        if (destId) {
            bookingDestSelect.value = destId;
        }

        openModal(bookingDialog);
    }

    bookingTriggers.forEach(trigger => {
        trigger.addEventListener("click", (e) => {
            e.preventDefault();
            openBookingModal();
        });
    });

    bookingCloseBtn.addEventListener("click", () => closeModal(bookingDialog));

    bookingForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const destId = bookingDestSelect.value;
        const name = document.getElementById("booking-name").value;
        const email = document.getElementById("booking-email").value;
        const seats = document.getElementById("booking-seats").value;
        
        const destObj = DESTINATIONS.find(d => d.id === destId);
        const randomId = "VT-" + Math.floor(100000 + Math.random() * 900000);
        
        // Update success info
        document.getElementById("success-email").textContent = email;
        document.getElementById("receipt-dest").textContent = `${destObj.title}, ${destObj.location}`;
        document.getElementById("receipt-seats").textContent = `${seats} seat${seats > 1 ? 's' : ''}`;
        document.getElementById("receipt-id").textContent = randomId;
        
        // Transition screens
        bookingForm.style.display = "none";
        bookingSuccessMessage.style.display = "flex";
    });

    closeSuccessBtn.addEventListener("click", () => {
        closeModal(bookingDialog);
    });

    // 3. Quiz Modal Action
    let quizState = {
        step: 1,
        answers: {}
    };

    function resetQuiz() {
        quizState.step = 1;
        quizState.answers = {};
        
        // Reset step classes
        quizSteps.forEach(s => s.classList.remove("active"));
        quizSteps[0].classList.add("active");
        
        // Reset selected options UI
        quizOptions.forEach(opt => opt.classList.remove("selected"));
        
        // Progress bar
        quizProgressFill.style.width = "25%";
        quizStepCounter.textContent = "Step 1 of 3";
        quizBackBtn.disabled = true;
    }

    quizTriggers.forEach(trigger => {
        trigger.addEventListener("click", (e) => {
            e.preventDefault();
            resetQuiz();
            openModal(quizDialog);
        });
    });

    quizCloseBtn.addEventListener("click", () => closeModal(quizDialog));
    
    // Option selections
    quizOptions.forEach(option => {
        option.addEventListener("click", () => {
            // Unselect sibling choices
            const parentStep = option.closest(".quiz-step");
            parentStep.querySelectorAll(".quiz-option").forEach(o => o.classList.remove("selected"));
            
            option.classList.add("selected");
            
            // Store answer
            const stepNum = parentStep.getAttribute("data-step");
            const answer = option.getAttribute("data-answer");
            
            if (stepNum == 1) quizState.answers.vibe = answer;
            if (stepNum == 2) quizState.answers.traveler = answer;
            if (stepNum == 3) quizState.answers.climate = answer;
            
            // Auto advance
            setTimeout(() => {
                advanceQuiz(1);
            }, 300);
        });
    });

    quizBackBtn.addEventListener("click", () => {
        if (quizState.step > 1) {
            advanceQuiz(-1);
        }
    });

    function advanceQuiz(direction) {
        if (direction === 1 && quizState.step === 3) {
            // Render Result
            quizState.step = 4;
            quizSteps.forEach(s => s.classList.remove("active"));
            quizSteps[3].classList.add("active");
            
            quizProgressFill.style.width = "100%";
            quizStepCounter.textContent = "Complete!";
            quizBackBtn.disabled = true;
            
            calculateQuizResult();
            return;
        }
        
        quizState.step += direction;
        
        // Manage visible step
        quizSteps.forEach(s => s.classList.remove("active"));
        const activeStep = document.querySelector(`.quiz-step[data-step="${quizState.step}"]`);
        if (activeStep) activeStep.classList.add("active");
        
        // Manage navigation buttons
        quizBackBtn.disabled = quizState.step === 1;
        
        // Progress indicator
        const pcts = { 1: "25%", 2: "50%", 3: "75%", 4: "100%" };
        quizProgressFill.style.width = pcts[quizState.step];
        quizStepCounter.textContent = `Step ${quizState.step} of 3`;
    }

    function calculateQuizResult() {
        const resultContainer = document.getElementById("quiz-result-container");
        resultContainer.innerHTML = `
            <div class="loading-spinner"></div>
            <p>Curating your perfect itinerary...</p>
        `;

        setTimeout(() => {
            const vibe = quizState.answers.vibe;
            const climate = quizState.answers.climate;
            
            let match = DESTINATIONS[0]; // default fallback
            
            if (vibe === "retreat") {
                // Suggest Bangli (Yoga) or Uluwatu (cliff)
                match = climate === "mountain" || climate === "lake" 
                    ? DESTINATIONS.find(d => d.id === "bangli-bali") 
                    : DESTINATIONS.find(d => d.id === "uluwatu");
            } else if (vibe === "adventure") {
                // Suggest Sumba (cycling coast) or Kazakhstan (mountains)
                match = climate === "mountain" 
                    ? DESTINATIONS.find(d => d.id === "kazakhstan-yurts") 
                    : DESTINATIONS.find(d => d.id === "sumba-adventure");
            } else if (vibe === "stay") {
                // Lake volcanic view
                match = DESTINATIONS.find(d => d.id === "toba-lake");
            }

            resultContainer.innerHTML = `
                <div class="success-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                </div>
                <h3>Your Vibe Match!</h3>
                <span class="rec-badge">${match.type} • ${match.rating} ★</span>
                <div class="rec-title">${match.title}</div>
                <div class="rec-image-box" style="background-image: url('${match.image}')"></div>
                <p style="font-size: 0.85rem; color: var(--text-muted); max-width: 400px;">Based on your choices, we recommend the <strong>${match.title}</strong> trip. Perfect for your traveling style!</p>
                <button class="view-rec-btn" id="quiz-view-rec" data-id="${match.id}">View Itinerary</button>
            `;

            // Bind recommend click listener
            document.getElementById("quiz-view-rec").addEventListener("click", (e) => {
                const recId = e.target.getAttribute("data-id");
                closeModal(quizDialog);
                
                // Scroll to card
                const card = document.getElementById(`card-${recId}`);
                if (card) {
                    card.scrollIntoView({ behavior: "smooth", block: "center" });
                    
                    // Add temporal flash highlight to card
                    card.style.transition = "all 0.3s ease";
                    card.style.borderColor = "var(--accent-blue)";
                    card.style.boxShadow = "0 0 0 4px rgba(42, 98, 198, 0.25)";
                    
                    setTimeout(() => {
                        card.style.borderColor = "var(--border-color)";
                        card.style.boxShadow = "var(--shadow-subtle)";
                    }, 2500);
                }
            });

        }, 1200); // 1.2s loading state for realism
    }
});
