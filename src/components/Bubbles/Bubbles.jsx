import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import React from 'react'
import ThemeContext from 'layout/themeContext'

const Bubbles = () => {
    const particlesInit = async (main) => {
        /* console.log(main); */

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main)
    }

    const particlesLoaded = (container) => {
        /* console.log(container); */
    }

    // Update contexte
    const contexteTheme = React.useContext(ThemeContext)

    let bubbleColor = '#DCDCDC'
    let linksColor = '#DCDCDC'
    let linksOpacity
    let bubbleOpacity

    if (contexteTheme.themeLight) {
        bubbleColor = '#000000'
        linksColor = '#000000'
        linksOpacity = 0.2
        bubbleOpacity = 0.2
    } else if (!contexteTheme.themeLight) {
        bubbleColor = '#DCDCDC'
        linksColor = '#DCDCDC'
        linksOpacity = 0.2
        bubbleOpacity = 0.3
    }
    const prefersDark =
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    /* console.log(prefersDark) */

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                /*  background: {
          color: {
            value: "#33333",
          },
        }, */
                emitters: {
                    direction: 'top',
                    size: {
                        width: 100,
                        height: 0
                    },
                    position: {
                        x: 50,
                        y: 100
                    },
                    rate: {
                        delay: 1,
                        quantity: 1
                    }
                },
                fpsLimit: 120,
                particles: {
                    number: {
                        value: 52,
                        density: {
                            enable: true,
                            value_area: 631.3280775270874
                        }
                    },
                    color: {
                        value: bubbleColor
                    },
                    shape: {
                        type: 'circle',
                        stroke: {
                            width: 0,
                            color: '#ffffff'
                        },
                        polygon: {
                            nb_sides: 5
                        }
                    },
                    opacity: {
                        value: bubbleOpacity,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 5,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 40,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: false,
                        distance: 500,
                        color: linksColor,
                        opacity: linksOpacity,
                        width: 2
                    },
                    move: {
                        enable: true,
                        speed: 0.7,
                        direction: '',
                        random: false,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'grab'
                        },
                        onclick: {
                            enable: true,
                            mode: 'repulse'
                        },
                        resize: true
                    },
                    modes: {
                        connect: {
                            distance: 200,
                            lineLinked: {
                                opacity: 0.5
                            },
                            radius: 150
                        },
                        grab: {
                            distance: 200,
                            line_linked: {
                                opacity: linksOpacity
                            }
                        },
                        bubble: {
                            distance: 10,
                            size: 4,
                            duration: 0.3,
                            opacity: 1,
                            speed: 5
                        },
                        repulse: {
                            distance: 300
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                },
                retina_detect: true
            }}
        />
    )
}

export default Bubbles
