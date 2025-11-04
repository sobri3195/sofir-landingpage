/**
 * SOFIR Landing Page JavaScript
 * Vanilla ES5 - No Build Process Required
 * Mobile-First, Performance Optimized
 */

(function() {
    'use strict';
    
    // ========================================
    // Utility Functions
    // ========================================
    
    function debounce(func, wait) {
        var timeout;
        return function() {
            var context = this;
            var args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(function() {
                func.apply(context, args);
            }, wait);
        };
    }
    
    function throttle(func, limit) {
        var inThrottle;
        return function() {
            var args = arguments;
            var context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(function() {
                    inThrottle = false;
                }, limit);
            }
        };
    }
    
    // ========================================
    // Header Scroll Behavior
    // ========================================
    
    var header = document.getElementById('header');
    var lastScrollTop = 0;
    
    function handleHeaderScroll() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    }
    
    window.addEventListener('scroll', throttle(handleHeaderScroll, 100));
    
    // ========================================
    // Mobile Menu Toggle
    // ========================================
    
    var hamburger = document.getElementById('hamburger');
    var mainNav = document.getElementById('main-nav');
    
    if (hamburger && mainNav) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            mainNav.classList.toggle('active');
            var isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
        });
        
        // Close menu when clicking nav links
        var navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                mainNav.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }
    
    // ========================================
    // Mobile Bottom Navigation
    // ========================================
    
    var mobileNav = document.getElementById('mobile-nav');
    
    function handleMobileNavVisibility() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 300 && window.innerWidth <= 640) {
            mobileNav.classList.add('visible');
        } else {
            mobileNav.classList.remove('visible');
        }
    }
    
    window.addEventListener('scroll', throttle(handleMobileNavVisibility, 100));
    window.addEventListener('resize', debounce(handleMobileNavVisibility, 200));
    
    // Update active state based on scroll position
    var sections = document.querySelectorAll('section[id]');
    var mobileNavItems = mobileNav.querySelectorAll('.mobile-nav-item');
    
    function updateMobileNavActive() {
        var scrollY = window.pageYOffset;
        
        sections.forEach(function(section) {
            var sectionHeight = section.offsetHeight;
            var sectionTop = section.offsetTop - 100;
            var sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                mobileNavItems.forEach(function(item) {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === '#' + sectionId) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', throttle(updateMobileNavActive, 100));
    
    // ========================================
    // Floating CTA Button
    // ========================================
    
    var floatingCta = document.getElementById('floating-cta');
    
    function handleFloatingCtaVisibility() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 800) {
            floatingCta.classList.add('visible');
        } else {
            floatingCta.classList.remove('visible');
        }
    }
    
    if (floatingCta) {
        window.addEventListener('scroll', throttle(handleFloatingCtaVisibility, 100));
        
        floatingCta.addEventListener('click', function() {
            scrollToDemo();
        });
    }
    
    // ========================================
    // Smooth Scroll
    // ========================================
    
    function smoothScrollTo(target, duration) {
        duration = duration || 800;
        var targetElement = typeof target === 'string' ? document.querySelector(target) : target;
        
        if (!targetElement) return;
        
        var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        var startPosition = window.pageYOffset;
        var distance = targetPosition - startPosition - 72; // Account for fixed header
        var startTime = null;
        
        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }
        
        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }
        
        requestAnimationFrame(animation);
    }
    
    window.scrollTo = function(selector) {
        smoothScrollTo(selector);
    };
    
    // Handle all anchor links
    document.addEventListener('click', function(e) {
        var target = e.target;
        
        // Check if clicked element or its parent is an anchor
        while (target && target !== document) {
            if (target.tagName === 'A' && target.getAttribute('href') && target.getAttribute('href').charAt(0) === '#') {
                e.preventDefault();
                var targetId = target.getAttribute('href');
                if (targetId !== '#') {
                    smoothScrollTo(targetId);
                }
                return;
            }
            target = target.parentNode;
        }
    });
    
    // ========================================
    // Counter Animation
    // ========================================
    
    function animateCounter(element) {
        var target = parseInt(element.getAttribute('data-count'));
        var duration = 2000;
        var start = 0;
        var startTime = null;
        
        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var progress = Math.min((currentTime - startTime) / duration, 1);
            var current = Math.floor(progress * (target - start) + start);
            element.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(animation);
            } else {
                element.textContent = target;
            }
        }
        
        requestAnimationFrame(animation);
    }
    
    // ========================================
    // Intersection Observer for Animations
    // ========================================
    
    if ('IntersectionObserver' in window) {
        var observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe all elements with data-animate attribute
        var animatedElements = document.querySelectorAll('[data-animate]');
        animatedElements.forEach(function(element) {
            observer.observe(element);
        });
        
        // Counter animation observer
        var counterObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        var counters = document.querySelectorAll('[data-count]');
        counters.forEach(function(counter) {
            counterObserver.observe(counter);
        });
    }
    
    // ========================================
    // Lazy Load Images
    // ========================================
    
    if ('IntersectionObserver' in window) {
        var imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var img = entry.target;
                    var src = img.getAttribute('data-src');
                    
                    if (src) {
                        img.setAttribute('src', src);
                        img.removeAttribute('data-src');
                        
                        img.onload = function() {
                            var parent = img.parentElement;
                            if (parent && parent.classList.contains('skeleton-loader')) {
                                parent.classList.add('loaded');
                            }
                        };
                        
                        imageObserver.unobserve(img);
                    }
                }
            });
        }, { rootMargin: '50px' });
        
        var lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(function(img) {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        var lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(function(img) {
            var src = img.getAttribute('data-src');
            if (src) {
                img.setAttribute('src', src);
                img.removeAttribute('data-src');
            }
        });
    }
    
    // ========================================
    // FAQ Accordion
    // ========================================
    
    window.toggleFaq = function(button) {
        var isActive = button.classList.contains('active');
        
        // Close all FAQ items
        var allButtons = document.querySelectorAll('.faq-item__question');
        allButtons.forEach(function(btn) {
            btn.classList.remove('active');
        });
        
        // Open clicked item if it wasn't already open
        if (!isActive) {
            button.classList.add('active');
        }
    };
    
    // ========================================
    // CTA Handlers
    // ========================================
    
    window.scrollToDemo = function() {
        smoothScrollTo('#demo');
        trackEvent('CTA', 'Click', 'Demo Button');
    };
    
    window.handleDemo = function() {
        // In production, this would open a demo modal or redirect to demo page
        alert('Demo akan segera dibuka!\n\nDalam implementasi production, ini akan membuka demo interaktif atau redirect ke halaman demo.');
        trackEvent('CTA', 'Click', 'Try Demo');
    };
    
    window.handleDownload = function() {
        // In production, this would trigger download or redirect to download page
        alert('Download akan dimulai!\n\nDalam implementasi production, ini akan trigger download file atau redirect ke halaman download.');
        trackEvent('CTA', 'Click', 'Download');
    };
    
    // ========================================
    // Analytics Event Tracking
    // ========================================
    
    function trackEvent(category, action, label) {
        // Google Analytics tracking
        if (typeof gtag === 'function') {
            gtag('event', action, {
                'event_category': category,
                'event_label': label
            });
        }
        
        // Console log for development
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log('Event tracked:', category, action, label);
        }
    }
    
    // Track CTA button clicks
    var ctaButtons = document.querySelectorAll('.btn--primary, .btn--secondary');
    ctaButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var buttonText = this.textContent.trim();
            trackEvent('Button', 'Click', buttonText);
        });
    });
    
    // Track section visibility
    if ('IntersectionObserver' in window) {
        var sectionObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var sectionId = entry.target.getAttribute('id');
                    if (sectionId) {
                        trackEvent('Section', 'View', sectionId);
                    }
                }
            });
        }, { threshold: 0.5 });
        
        sections.forEach(function(section) {
            sectionObserver.observe(section);
        });
    }
    
    // ========================================
    // Filter Chips (Directory Section)
    // ========================================
    
    var filterChips = document.querySelectorAll('.filter-chip');
    filterChips.forEach(function(chip) {
        chip.addEventListener('click', function() {
            filterChips.forEach(function(c) {
                c.classList.remove('active');
            });
            this.classList.add('active');
            
            var filterValue = this.textContent.trim();
            trackEvent('Filter', 'Click', filterValue);
            
            // In production, this would filter the listings
            console.log('Filter applied:', filterValue);
        });
    });
    
    // ========================================
    // Keyboard Navigation
    // ========================================
    
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape' || e.keyCode === 27) {
            if (hamburger && mainNav) {
                hamburger.classList.remove('active');
                mainNav.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        }
    });
    
    // ========================================
    // Performance Monitoring
    // ========================================
    
    window.addEventListener('load', function() {
        // Log performance metrics
        if ('performance' in window && 'timing' in window.performance) {
            var timing = window.performance.timing;
            var loadTime = timing.loadEventEnd - timing.navigationStart;
            
            console.log('Page Load Time:', (loadTime / 1000).toFixed(2) + 's');
            
            // Track in analytics
            if (typeof gtag === 'function') {
                gtag('event', 'timing_complete', {
                    'name': 'load',
                    'value': loadTime,
                    'event_category': 'Performance'
                });
            }
        }
        
        // Measure Core Web Vitals if available
        if ('PerformanceObserver' in window) {
            try {
                // LCP - Largest Contentful Paint
                var lcpObserver = new PerformanceObserver(function(list) {
                    var entries = list.getEntries();
                    var lastEntry = entries[entries.length - 1];
                    console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
                });
                lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
                
                // FID - First Input Delay
                var fidObserver = new PerformanceObserver(function(list) {
                    var entries = list.getEntries();
                    entries.forEach(function(entry) {
                        console.log('FID:', entry.processingStart - entry.startTime);
                    });
                });
                fidObserver.observe({ entryTypes: ['first-input'] });
                
                // CLS - Cumulative Layout Shift
                var clsValue = 0;
                var clsObserver = new PerformanceObserver(function(list) {
                    var entries = list.getEntries();
                    entries.forEach(function(entry) {
                        if (!entry.hadRecentInput) {
                            clsValue += entry.value;
                            console.log('CLS:', clsValue);
                        }
                    });
                });
                clsObserver.observe({ entryTypes: ['layout-shift'] });
            } catch (e) {
                // PerformanceObserver not fully supported
                console.log('Core Web Vitals measurement not available');
            }
        }
    });
    
    // ========================================
    // Preload Critical Resources
    // ========================================
    
    function preloadResource(href, as, type) {
        var link = document.createElement('link');
        link.rel = 'preload';
        link.as = as;
        link.href = href;
        if (type) link.type = type;
        document.head.appendChild(link);
    }
    
    // ========================================
    // Form Handling (for future implementation)
    // ========================================
    
    var forms = document.querySelectorAll('form');
    forms.forEach(function(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            var formData = new FormData(form);
            var formObject = {};
            
            formData.forEach(function(value, key) {
                formObject[key] = value;
            });
            
            console.log('Form submitted:', formObject);
            trackEvent('Form', 'Submit', form.getAttribute('id') || 'unnamed-form');
            
            // In production, send to backend API
            // fetch('/api/submit', {
            //     method: 'POST',
            //     body: JSON.stringify(formObject),
            //     headers: { 'Content-Type': 'application/json' }
            // });
        });
    });
    
    // ========================================
    // PWA Support (optional)
    // ========================================
    
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            // Service worker registration would go here
            // navigator.serviceWorker.register('/sw.js');
        });
    }
    
    // ========================================
    // Dark Mode Toggle (for future enhancement)
    // ========================================
    
    function initDarkMode() {
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        
        function toggleDarkMode(e) {
            if (e.matches) {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
            }
        }
        
        // Listen for changes
        if (prefersDark.addEventListener) {
            prefersDark.addEventListener('change', toggleDarkMode);
        } else {
            prefersDark.addListener(toggleDarkMode); // Legacy support
        }
        
        // Initial check
        toggleDarkMode(prefersDark);
    }
    
    // Uncomment to enable dark mode
    // initDarkMode();
    
    // ========================================
    // Console Easter Egg
    // ========================================
    
    console.log('%cSOFIR - Smart Optimized Framework for Integrated Rendering', 'font-size: 20px; font-weight: bold; color: #3B82F6;');
    console.log('%cInterested in joining our team? Email us at careers@sofir.id', 'font-size: 14px; color: #64748B;');
    console.log('%cCheck out our documentation at https://docs.sofir.id', 'font-size: 14px; color: #10B981;');
    
    // ========================================
    // Initialize on DOM Ready
    // ========================================
    
    function init() {
        console.log('SOFIR Landing Page initialized');
        handleHeaderScroll();
        handleMobileNavVisibility();
        handleFloatingCtaVisibility();
    }
    
    // Run init
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();
