import {Button, Title} from "../../Components";
import "./style.scss"
import Matter, {Bodies, Body, Engine, Mouse, MouseConstraint, Render, World} from 'matter-js'
import React, {useEffect, useRef} from "react";
import {useAppMediaQuery} from "../../Hooks/MediaQuery/use-app-media-query";
import {useRouter} from 'next/router';
import useWindowDimensions from "../../Hooks/MediaQuery/use-size-windows";
import {GetStaticProps, InferGetStaticPropsType} from "next";

let counter: number = 0
var bodies: Body[] = [];
const GeneralError = ({
                          pageType
                      }: InferGetStaticPropsType<typeof getStaticProps>) => {
// const GeneralError = () => {

    const {push} = useRouter()

    // let cw = document.body.clientWidth
    // let ch = document.body.clientHeight
    let {width: cw, height: ch} = useWindowDimensions()
    const scene = useRef<any>()
    const engine = useRef(Engine.create())
    const {isMobile, isTablet} = useAppMediaQuery();
    useEffect(() => {
        const render = Render.create({
            element: scene.current,
            engine: engine.current,
            options: {
                width: cw,
                height: ch,
                wireframes: false,
                background: 'transparent',
            }
        })
        const floor = Bodies.rectangle(0, ch + 200, cw * 2, 400, {
            isStatic: true,
            friction: 1,
            render: {
                fillStyle: "transparent"
            }
        });
        const roof = Bodies.rectangle(0, 0, cw * 2, 10, {
            isStatic: true,
            friction: 1,
            render: {
                fillStyle: "transparent"
            }
        });
        const leftWall = Bodies.rectangle(-200, 400, 400, ch, {
            isStatic: true,
            friction: 1,
            render: {
                fillStyle: "transparent"
            }
        });
        const rightWall = Bodies.rectangle(cw + 200, 400, 400, ch, {
            isStatic: true,
            friction: 1,
            render: {
                fillStyle: "transparent"
            }
        });


        var colors = ["#35ACFE", "#232736", "#6547FF", "#35ACFE", "#FFBF38"]

        for (let i = 0; i < 60; i++) {
            bodies[i] = Bodies.polygon((Math.floor(Math.random() * (cw - 50))), 0, 3, isTablet ? 40 : isMobile ? 20 : 50, {
                friction: 1,
                timeScale: 0.5,
                restitution: 0.8,
                velocity: {x: 5, y: 5},
                render: {
                    fillStyle: colors[Math.floor(Math.random() * 5)],
                    strokeStyle: "transparent",
                    lineWidth: 3
                },
            })
            if (isMobile)
                Body.scale(bodies[i], 0.9, 1.5)
            else
                Body.scale(bodies[i], 0.6, 1.1)

            Body.rotate(bodies[i], Math.random());
        }


        World.add(engine.current.world, [floor, leftWall, rightWall, roof]);

        var mouse = Mouse.create(render.canvas),
            mouseConstraint = MouseConstraint.create(engine.current, {
                mouse: mouse,
                // @ts-ignore
                constraint: {
                    stiffness: 0.2,
                    render: {
                        visible: false
                    },


                }
            });


        if (counter < 9) {
            for (let x = 1; x < 10; x++) {
                setTimeout(() => {

                    World.add(engine.current.world, bodies.slice((counter * 6), ((counter + 1) * 6) - 1));
                    counter++;
                }, x * 100)
            }
        }
        World.add(engine.current.world, mouseConstraint);
        Matter.Runner.run(engine.current)
        Render.run(render);

        return () => {
            Render.stop(render)
            World.clear(engine.current.world, false)
            Engine.clear(engine.current)
            render.canvas.remove()
            render.textures = {}
        }
    }, [ch, cw])


    return (
        <div className={"general-error-container"}>
            <>
                <style>
                    {
                        `
                            body {
                                  -ms-overflow-style: none; /* for Internet Explorer, Edge */
                                  scrollbar-width: none; /* for Firefox */
                                  overflow-y:hidden !important;
                                }
    
                                body::-webkit-scrollbar {
                                  display: none; /* for Chrome, Safari, and Opera */
                                }
                        `
                    }
                </style>

            </>

            <div onMouseDown={(e) => {
                if (e.button == 1) {
                    e.preventDefault()
                    return false
                }
            }
            } ref={scene} className={"offline-container"}>
                <div className={"offline-content"}>
                    <Title className={"error-code-title"}
                           typographyType={{type: "bold-semi-bold-semi-bold", size: "200px-80px-80px"}}
                           level={5}
                    >500</Title>
                    <Title level={5}
                           typographyType={{type: "semi-bold-semi-bold-semi-bold", size: "48px-24px-24px"}}>
                        Something went wrong
                    </Title>

                </div>
                <div className={"reload-button-container"}>
                    <Button onWheel={(e) => {


                    }
                    } className={"reload-button"} type={"primary"} onClick={() => {
                        push("/")
                    }}>Go back to home</Button>

                </div>

            </div>
        </div>
    )
}
export default GeneralError

// getStaticProps
export const getStaticProps: GetStaticProps<{ pageType: any }> = async ({params}) => {

    return {
        props: {pageType: "system"},
        //   props: { pageType : "system"},
    }
}