import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { BaseAnimation } from './BaseAnimation';

export class IndexPageAnimation extends BaseAnimation {
  constructor(parent: HTMLElement | string | null) {
    super(parent);

    this.initFirstScreenAnimation();
    this.initPartnersSection();
    this.initTrendingSection();
    // this.initBuiltSection();
    this.initBannerAnimation();
    this.initUltimateAppSection();
    this.initNoteSection();
  }

  activeVideoScreenId = useState('active-video-screen-id');
  soundScreenMuted = useState('sound-screen-muted');

  initFirstScreenAnimation() {
    animateSplitText('.hero__title', {}, true);
    animateSplitText('.hero__descr', {
      delay: 0.3,
    });

    gsap.to('.hero__line--top', {
      x: '100%',
      y: 70,
      scrollTrigger: {
        trigger: '.hero',
        start: '1% 0%',
        end: '40% 0%',
        scrub: 1
      }
    })

    gsap.to('.hero__line--top-bottom', {
      x: '100%',
      y: 300,
      scrollTrigger: {
        trigger: '.hero',
        start: '1% 0%',
        end: '40% 0%',
        scrub: 1
      }
    })

    gsap.to('.hero__line--bottom', {
      x: "-100%",
      scrollTrigger: {
        trigger: '.hero',
        start: '8% 5%',
        end: 'bottom 5%',
        scrub: 1
      }
    })

    gsap.to('.hero__line--bottom-top', {
      x: "100%",
      scrollTrigger: {
        trigger: '.hero',
        start: '8% 5%',
        end: 'bottom 5%',
        scrub: 1
      }
    })

    gsap.to('.hero__download, .hero__footer-text, .hero__footer-scroll, .hero__photo img, .phone-img', {
      opacity: 1,
      stagger: 0.05,
      duration: 0.7,
      delay: 0.2,
    });
  }

  initBannerAnimation() {


    ScrollTrigger.create({
      trigger: '.banner',
      start: 'top top',
      end: 'bottom top',

      onEnter() {
        gsap.to('.header__logo-link path', {
          fill: 'white',
        });

        gsap.to('.header__button-item', {
          backgroundColor: '#ffff',
          color: '#111'
        });

        gsap.to('.header__logo-link circle', {
          stroke: 'white',
        });
      },

      onLeaveBack() {

        gsap.to('.header__button-item', {
          backgroundColor: '#111',
          color: '#ffff'
        });

        gsap.to('.header__logo-link path', {
          fill: 'black',
        });
      },
    })


  }

  initBuiltSection() {
    const otherPhotos = document.querySelectorAll('.other-photo');
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.built',
        start: '-=500px',
        end: '10%',
        scrub: true,
      }
    });

    if (otherPhotos) {

    tl.set(
      otherPhotos,
      {
        opacity: 1,
      },
      '-=0.5',
    );
    tl.from(
      otherPhotos[0],
      {
        x: '-100vw',
      },
      '-=0.5',
    );
    tl.from(
      otherPhotos[1],
      {
        x: '-500px',
        y: '-100vh',
      },
      '-=0.5',
    );
    tl.from(
      otherPhotos[2],
      {
        y: '100vh',
      },
      '-=0.5',
    );
    tl.from(
      otherPhotos[3],
      {
        y: '-100vh',
      },
      '-=0.5',
    );
    tl.from(
      otherPhotos[4],
      {
        y: '-100vh',
        x: '-400px',
      },
      '-=0.5',
    );
    tl.from(
      otherPhotos[5],
      {
        y: '80vh',
      },
      '-=0.5',
    );
    tl.from(
      otherPhotos[6],
      {
        y: '-100vh',
        x: '500px',
      },
      '-=0.5',
    );
    tl.from(
      otherPhotos[7],
      {
        y: '100vh',
      },
      '-=0.5',
    );
    tl.from(
      otherPhotos[8],
      {
        y: '100vh',
        x: '500px',
      },
      '-=0.5',
    );
    tl.from(
      otherPhotos[9],
      {
        x: '100vw',
      },
      '-=0.5',
    );
    tl.from(
      otherPhotos[10],
      {
        y: '-100vh',
        x: '500px',
      },
      '-=0.5',
    );
  }

  }

  initPartnersSection() {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.partners',
        start: 'top 70%',
        end: 'bottom bottom',

        onEnter() {
          gsap.to('.header__logo-link path', {
            fill: 'black',
          });

          gsap.to('.header', {
            backgroundColor: 'transparent',
          });

          gsap.to('.header__button-item', {
            backgroundColor: '#111',
            color: '#fff'
          });

          gsap.to('.header__logo-link circle', {
            stroke: 'black',
          });
        },

      }

    });

    tl.from('.partners__logo', {
      opacity: 0,
      y: 30,
      stagger: 0.1
    })
  }

  initUltimateAppSection() {


    gsap.to('.ultimate__line--1', {
      x: '70%',
      scrollTrigger: {
        trigger: '.ultimate',
        start: '20% start',
        end: '80% 50%',
        scrub: 3,
        
      }
    })

    gsap.to('.ultimate__line--2', {
      x: '-170%',
      scrollTrigger: {
        trigger: '.ultimate',
        start: 'start start',
        end: 'bottom bottom',
        scrub: 3,
      }
    })

    gsap.to('.header__logo-link path', {
      fill: 'black',
      scrollTrigger: {
        trigger: '.ultimate',
        start: 'start start',
        end: 'bottom bottom',

        onEnter() {
          gsap.to('.header__logo-link path', {
            fill: 'black'
          })
        },

        onLeaveBack() {
          gsap.to('.header__logo-link path', {
            fill: 'white'
          })
        },

        onEnterBack() {
          gsap.to('.header__logo-link path', {
            fill: 'black'
          })
        }
      }
    });
  }

  initTrendingSection() {
    const trendingItems = document.querySelectorAll('.trending__item');

    trendingItems.forEach(item => {
      const title = item.querySelector('.trending__title');
      const description = item.querySelector('.trending__descr');
      const scribble = item.querySelector('.two-videos-section__scribble');

      ScrollTrigger.create({
        trigger: title,
        animation: animateSplitText(
          title,
          {
            delay: 0.3,
            duration: 0.5
          },
          true,
        ).add(
          animateSplitText(description, {
            delay: 0.3,
            duration: 0.5,
          }),
          0,
        ),

        onEnter() {
          gsap.to(scribble, {
            width: 'auto',
            duration: 1
          })
        },

        onLeaveBack: () => {
          if (window.innerWidth >= 1024) {
            gsap.to('.header__inner', {
                width: "45%"
            });
        }
          gsap.to('.header', {
            backgroundColor: 'transparent',
          });
        }
      });
  
      ScrollTrigger.create({
        trigger: item,
        animation: gsap.timeline().fromTo(
          item,
          {
            opacity: 0,
            yPercent: 20,
          },
          {
            yPercent: 0,
            duration: 0.5,
            delay: 0.3,
            stagger: {
              from: 'center',
              each: 0.1,
            },
            opacity: 1,
          },
        ),
      });


    })

      
    ScrollTrigger.create({
      trigger: '.trending',
      scrub: true,
      start: `top top`,
      end: 'top top',
      onEnter() {
        gsap.to('.header__logo-link path', {
          fill: 'black',
        });

        gsap.to('.header__link', {
          color: '#00f',
        });



        
      },

      onLeaveBack() {
        gsap.to('.header__logo-link path', {
          fill: 'white',
        });
      }
    });
  }

  initNoteSection() {
    ScrollTrigger.create({
      trigger: '.note',
      start: '-20% 0%',
      onEnter: () => {
        gsap.to('.header__logo-link path', {
          fill: 'white',
        })

                
        gsap.to('.header__link', {
          width: "100%",
          color: '#fff'
        });

        
        gsap.to('.header__inner', {
          width: "100%"
        });
      },

      onLeaveBack: () => {
        gsap.to('.header__logo-link path', {
          fill: 'black',
        })  

        gsap.to('.header__link', {
          color: '#00f',
        })  


        if (window.innerWidth >= 1024) {          
          gsap.to('.header__inner', {
            width: "45%"
          });          
        }

        gsap.to('.header', {
          backgroundColor: 'transparent',
        })
      }
    })
  }
  

  // Cleanup gsap animations and ScrollTrigger instances
  cleanupAnimations() {
    // Kill all potential tweens
    gsap.killTweensOf('.hero__title, .hero__descr, .header__logo-link path, .partners__text, .partners__bottom-title');

    // Clear the global timeline
    gsap.globalTimeline.clear();

    // Remove ScrollTrigger instances
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Reset specific elements to their initial state
    gsap.set(
      '.hero__title, .hero__descr, .header__logo-link path, .header, .hero__download, .hero__footer-text, .hero__footer-scroll, .hero__photo img, .phone-img, .partners__text, .partners__bottom-title',
      { clearProps: 'all' },
    );
  }
}
