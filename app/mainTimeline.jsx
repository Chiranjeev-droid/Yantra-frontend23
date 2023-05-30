"use client";
import React from "react";
import Carousel from "./Landing/Carousel";
import NewCard from "./Landing/NewCard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const eventCodes = [
  "IMPETUS",
  "EHACK",
  "INNOVENTURE",
  "EVENT_4",
  "EVENT_5",
  "EVENT_6",
];

export default function Maintimeline({ userArray, eventsArray, session }) {
  //console.log("Events array",eventsArray);
  //console.log("User array",userArray);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="timeline_sec">
        <div className="timeline-cont">
          <div className="timeline_header">
            <h1 className="about_h1 text-white bg-black border-b-4">Events</h1>
            {/* <div className="bg-slate-700 h-0.5"></div> */}
          </div>

          {session ? (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 sm:gap-4">
                <div className="timeline-element my-4">
                  <NewCard
                    isRegistered={userArray[0]}
                    event={eventsArray[0]}
                    id={0}
                    eventsArray={eventsArray}
                    userArray={userArray}
                  ></NewCard>
                </div>{" "}
                <div className="timeline-element my-4">
                  <NewCard
                    isRegistered={userArray[1]}
                    event={eventsArray[1]}
                    id={1}
                    eventsArray={eventsArray}
                    userArray={userArray}
                  ></NewCard>
                </div>{" "}
                <div className="timeline-element my-4">
                  <NewCard
                    isRegistered={userArray[2]}
                    event={eventsArray[2]}
                    id={2}
                    eventsArray={eventsArray}
                    userArray={userArray}
                  ></NewCard>
                </div>
                <div className="timeline-element my-4">
                  <NewCard
                    isRegistered={userArray[3]}
                    event={eventsArray[3]}
                    id={3}
                    eventsArray={eventsArray}
                    userArray={userArray}
                  ></NewCard>
                </div>
              </div>
            </div>
          ) : (
            <>
              {" "}
              <>
              <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 sm:gap-4">
                  <div className="timeline-element my-4">
                    <NewCard
                      isRegistered={0}
                      event={eventsArray[0]}
                      id={0}
                      eventsArray={eventsArray}
                      userArray={userArray}
                    ></NewCard>
                  </div>{" "}
                  <div className="timeline-element my-4">
                    <NewCard
                      isRegistered={0}
                      event={eventsArray[1]}
                      id={1}
                      eventsArray={eventsArray}
                      userArray={userArray}
                    ></NewCard>
                  </div>
                  <div className="timeline-element my-4">
                    <NewCard
                      isRegistered={0}
                      event={eventsArray[2]}
                      id={2}
                      eventsArray={eventsArray}
                      userArray={userArray}
                    ></NewCard>
                  </div>
                </div>
                <div className="timeline-element my-4">
                  <NewCard
                    isRegistered={0}
                    event={eventsArray[3]}
                    id={3}
                    eventsArray={eventsArray}
                    userArray={userArray}
                  ></NewCard>
                </div>{" "}
              </>
            </>
          )}
        </div>
        {/* <Carousel /> */}
      </div>
    </>
  );
}
{
  /* 
          {eventsArray.map((event, id) => {
            return (
              <>
                <div className="timeline-element my-4" key={id}>
                  <div className="rod">
                    <div className="outer_div">
                      <img src="gola.svg" className="image"></img>
                    </div>
                    <div
                      className={`linetimeline  ${id === 4 ? "hide" : ""}`}
                    ></div>
                  </div>

                  {session ? (
                    <>
                      <NewCard
                        isRegistered={userArray[id]}
                        event={event}
                        key={event._id}
                        id={id}
                        userArray={userArray}
                        //   setUserArray,
                      />
                    </>
                  ) : (
                    <>
                      {" "}
                      <NewCard
                        event={event}
                        key={event._id}
                        id={id}
                        isRegistered={0}
                      />
                    </>
                  )}
                </div>
              </>
            );
          })} */
}
