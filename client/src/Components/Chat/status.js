import * as React from "react";

import {
  FaAlignLeft,
  FaAngleDown,
  // FaAngleUp,
  FaFileAlt,
  FaCalendarAlt,
} from "react-icons/fa";

import { AiFillCheckCircle } from "react-icons/ai";

export default function Status(props) {
  // const [activeStep, setActiveStep] = React.useState("");
  const status = props.Status;
  const price = props.Price;
  const deadline = props.Deadline;
  return (
    <>
      <div>
        <div>
          <div>
            <FaAlignLeft style={{ float: "left", margin: 15, fontSize: 20 }} />
            <p
              style={{
                float: "left",
                margin: 5,
                marginLeft: 0,
                marginRight: 90,
                fontSize: 24,
                fontWeight: 500,
              }}
            >
              Status
            </p>
            <FaAngleDown style={{ float: "left", margin: 15, fontSize: 20 }} />
          </div>

          {status === "0" ? (
            <>
              <div>
                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: 17,
                  }}
                >
                  Translator has accepted the job.
                </p>
                <p style={{ float: "left", fontSize: 13, color: "#FFC100" }}>
                  pending
                </p>
              </div>

              <div>
                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: 17,
                  }}
                >
                  Pay
                </p>
                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: 17,
                    fontSize: 13,
                    color: "#858585",
                  }}
                >
                  {/* payment amount : $32.5 */}
                </p>
              </div>

              <div>
                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: 17,
                  }}
                >
                  Translating
                </p>

                <FaCalendarAlt
                  style={{
                    float: "left",
                    fontSize: 16,
                    textAlign: "left",
                    width: 68,
                    position: "relative",
                    right: 10,
                  }}
                />
                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: -30,
                    fontSize: 13,
                    color: "#858585",
                  }}
                ></p>
              </div>

              <div>
                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: 17,
                  }}
                >
                  Send to
                </p>

                <FaCalendarAlt
                  style={{
                    float: "left",
                    fontSize: 16,
                    textAlign: "left",
                    width: 68,
                    position: "relative",
                    right: 10,
                  }}
                />
                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: -30,
                    fontSize: 13,
                    color: "#858585",
                  }}
                ></p>
              </div>

              <div>
                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: 17,
                  }}
                >
                  Review
                </p>
              </div>
            </>
          ) : status === "1" ? (
            <>
              <div>
                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: 17,
                    marginRight: 17,
                  }}
                >
                  Translator has accepted the job.
                </p>
                <AiFillCheckCircle
                  style={{ float: "left", fontSize: 20, color: "#46BC52" }}
                />
              </div>

              <div>
                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: 17,
                  }}
                >
                  Pay
                </p>
                <p style={{ float: "left", fontSize: 13, color: "#FFC100" }}>
                  pending
                </p>
                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: 17,
                    fontSize: 13,
                    color: "#858585",
                  }}
                >
                  payment amount :{price}
                </p>
              </div>

              <div>
                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: 17,
                  }}
                >
                  Translating
                </p>

                <FaCalendarAlt
                  style={{
                    float: "left",
                    fontSize: 16,
                    textAlign: "left",
                    width: 68,
                    position: "relative",
                    right: 10,
                  }}
                />
                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: -30,
                    fontSize: 13,
                    color: "#858585",
                  }}
                >
                  Dateline {deadline}
                </p>
              </div>

              <div>
                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: 17,
                  }}
                >
                  Send to
                </p>

                <FaCalendarAlt
                  style={{
                    float: "left",
                    fontSize: 16,
                    textAlign: "left",
                    width: 68,
                    position: "relative",
                    right: 10,
                  }}
                />
                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: -30,
                    fontSize: 13,
                    color: "#858585",
                  }}
                ></p>
              </div>

              <div>
                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: 17,
                  }}
                >
                  Review
                </p>
              </div>
            </>
          ) : status === "2" ? (
            <>
              <div>
                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: 17,
                    marginRight: 17,
                  }}
                >
                  Translator has accepted the job.
                </p>
                <AiFillCheckCircle
                  style={{ float: "left", fontSize: 20, color: "#46BC52" }}
                />
              </div>

              <div>
                <p
                  style={{
                    float: "left",
                    width: 206,
                    textAlign: "left",
                    marginLeft: 17,
                  }}
                >
                  Pay
                </p>
                <AiFillCheckCircle
                  style={{ float: "left", fontSize: 20, color: "#46BC52" }}
                />
                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: 17,
                    fontSize: 13,
                    color: "#858585",
                  }}
                >
                  payment amount :{price}
                </p>
              </div>

              <div>
                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: 17,
                  }}
                >
                  Translating
                </p>
                <p style={{ float: "left", fontSize: 13, color: "#FFC100" }}>
                  pending
                </p>
                <FaCalendarAlt
                  style={{
                    float: "left",
                    fontSize: 16,
                    textAlign: "left",
                    width: 68,
                    position: "relative",
                    right: 10,
                  }}
                />
                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: -30,
                    fontSize: 13,
                    color: "#858585",
                  }}
                >
                  Dateline {deadline}
                </p>
              </div>

              <div>
                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: 17,
                  }}
                >
                  Send to
                </p>
                <FaCalendarAlt
                  style={{
                    float: "left",
                    fontSize: 16,
                    textAlign: "left",
                    width: 68,
                    position: "relative",
                    right: 10,
                  }}
                />

                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: -30,
                    fontSize: 13,
                    color: "#858585",
                  }}
                ></p>
              </div>

              <div>
                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: 17,
                  }}
                >
                  Review
                </p>
              </div>
            </>
          ) : status === "3" ? (
            <>
              <div>
                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: 17,
                    marginRight: 17,
                  }}
                >
                  Translator has accepted the job.
                </p>
                <AiFillCheckCircle
                  style={{ float: "left", fontSize: 20, color: "#46BC52" }}
                />
              </div>

              <div>
                <p
                  style={{
                    float: "left",
                    width: 206,
                    textAlign: "left",
                    marginLeft: 17,
                  }}
                >
                  Pay
                </p>
                <AiFillCheckCircle
                  style={{ float: "left", fontSize: 20, color: "#46BC52" }}
                />
                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: 17,
                    fontSize: 13,
                    color: "#858585",
                  }}
                >
                  payment amount : {price}
                </p>
              </div>

              <div>
                <p
                  style={{
                    float: "left",
                    width: 206,
                    textAlign: "left",
                    marginLeft: 17,
                  }}
                >
                  Translating
                </p>
                <AiFillCheckCircle
                  style={{ float: "left", fontSize: 20, color: "#46BC52" }}
                />
                <FaCalendarAlt
                  style={{
                    float: "left",
                    fontSize: 16,
                    textAlign: "left",
                    width: 68,
                    position: "relative",
                    right: 10,
                  }}
                />
                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: -30,
                    fontSize: 13,
                    color: "#858585",
                  }}
                >
                  Dateline {deadline}
                </p>
              </div>

              <div>
                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: 17,
                  }}
                >
                  Send to
                </p>
                <p style={{ float: "left", fontSize: 13, color: "#FFC100" }}>
                  pending
                </p>
                <FaCalendarAlt
                  style={{
                    float: "left",
                    fontSize: 16,
                    textAlign: "left",
                    width: 68,
                    position: "relative",
                    right: 10,
                  }}
                />

                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: -30,
                    fontSize: 13,
                    color: "#858585",
                  }}
                ></p>
              </div>

              <div>
                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: 17,
                  }}
                >
                  Review
                </p>
              </div>
            </>
          ) : status === "4" ? (
            <>
              <div>
                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: 17,
                    marginRight: 17,
                  }}
                >
                  Translator has accepted the job.
                </p>
                <AiFillCheckCircle
                  style={{ float: "left", fontSize: 20, color: "#46BC52" }}
                />
              </div>

              <div>
                <p
                  style={{
                    float: "left",
                    width: 206,
                    textAlign: "left",
                    marginLeft: 17,
                  }}
                >
                  Pay
                </p>
                <AiFillCheckCircle
                  style={{ float: "left", fontSize: 20, color: "#46BC52" }}
                />
                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: 17,
                    fontSize: 13,
                    color: "#858585",
                  }}
                >
                  payment amount : {price}
                </p>
              </div>

              <div>
                <p
                  style={{
                    float: "left",
                    width: 206,
                    textAlign: "left",
                    marginLeft: 17,
                  }}
                >
                  Translating
                </p>
                <AiFillCheckCircle
                  style={{ float: "left", fontSize: 20, color: "#46BC52" }}
                />
                <FaCalendarAlt
                  style={{
                    float: "left",
                    fontSize: 16,
                    textAlign: "left",
                    width: 68,
                    position: "relative",
                    right: 10,
                  }}
                />
                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: -30,
                    fontSize: 13,
                    color: "#858585",
                  }}
                >
                  Dateline {deadline}
                </p>
              </div>

              <div>
                <p
                  style={{
                    float: "left",
                    width: 206,
                    textAlign: "left",
                    marginLeft: 17,
                  }}
                >
                  Send to
                </p>
                <AiFillCheckCircle
                  style={{ float: "left", fontSize: 20, color: "#46BC52" }}
                />
                <FaCalendarAlt
                  style={{
                    float: "left",
                    fontSize: 16,
                    textAlign: "left",
                    width: 68,
                    position: "relative",
                    right: 10,
                  }}
                />

                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: -30,
                    fontSize: 13,
                    color: "#858585",
                  }}
                ></p>
              </div>

              <div>
                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: 17,
                  }}
                >
                  Review
                </p>
                <p style={{ float: "left", fontSize: 13, color: "#FFC100" }}>
                  pending
                </p>
              </div>
            </>
          ) : status === "5" ? (
            <>
              <div>
                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: 17,
                    marginRight: 17,
                  }}
                >
                  Translator has accepted the job.
                </p>
                <AiFillCheckCircle
                  style={{ float: "left", fontSize: 20, color: "#46BC52" }}
                />
              </div>

              <div>
                <p
                  style={{
                    float: "left",
                    width: 206,
                    textAlign: "left",
                    marginLeft: 17,
                  }}
                >
                  Pay
                </p>
                <AiFillCheckCircle
                  style={{ float: "left", fontSize: 20, color: "#46BC52" }}
                />
                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: 17,
                    fontSize: 13,
                    color: "#858585",
                  }}
                >
                  payment amount : {price}
                </p>
              </div>

              <div>
                <p
                  style={{
                    float: "left",
                    width: 206,
                    textAlign: "left",
                    marginLeft: 17,
                  }}
                >
                  Translating
                </p>
                <AiFillCheckCircle
                  style={{ float: "left", fontSize: 20, color: "#46BC52" }}
                />
                <FaCalendarAlt
                  style={{
                    float: "left",
                    fontSize: 16,
                    textAlign: "left",
                    width: 68,
                    position: "relative",
                    right: 10,
                  }}
                />
                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: -30,
                    fontSize: 13,
                    color: "#858585",
                  }}
                >
                  Dateline {deadline}
                </p>
              </div>

              <div>
                <p
                  style={{
                    float: "left",
                    width: 206,
                    textAlign: "left",
                    marginLeft: 17,
                  }}
                >
                  Send to
                </p>
                <AiFillCheckCircle
                  style={{ float: "left", fontSize: 20, color: "#46BC52" }}
                />
                <FaCalendarAlt
                  style={{
                    float: "left",
                    fontSize: 16,
                    textAlign: "left",
                    width: 68,
                    position: "relative",
                    right: 10,
                  }}
                />

                <p
                  style={{
                    float: "left",
                    width: 190,
                    textAlign: "left",
                    marginLeft: -30,
                    fontSize: 13,
                    color: "#858585",
                  }}
                ></p>
              </div>

              <div>
                <p
                  style={{
                    float: "left",
                    width: 206,
                    textAlign: "left",
                    marginLeft: 17,
                  }}
                >
                  Review
                </p>
                <AiFillCheckCircle
                  style={{ float: "left", fontSize: 20, color: "#46BC52" }}
                />
              </div>
            </>
          ) : null}
          <hr style={{ width: " 90%", height: 1, margin: 15 }} />
        </div>

        <div>
          <div>
            <div>
              <FaFileAlt style={{ float: "left", margin: 15, fontSize: 20 }} />
              <p
                style={{
                  float: "left",
                  margin: 5,
                  marginLeft: 0,
                  marginRight: 90,
                  fontSize: 24,
                  fontWeight: 500,
                }}
              >
                Files
              </p>
              <FaAngleDown
                style={{ float: "left", margin: 15, fontSize: 20 }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
