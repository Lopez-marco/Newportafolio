import React, {useEffect, useState} from 'react';

const GotoTop = (props) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        document.addEventListener("scroll", function (e) {
            toggleVisbility();
        })
    }, []);

    const toggleVisbility = () => {
        if(window.pageXOffset > 100) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.screenTop({
            top: 0,
            behavior: "smooth"
        })
    }

    return ( <div className="scroll-to-top">
        {isVisible && (
            <div onclick= {scrollToTop()}> <svg
            xmlns="http://www.w3.org/2000/svg"
            height="38.735"
            width="33.749"
          >
            <g transform="translate(-18.121 -3.364)">
              <rect
                ry="4.928"
                y="3.364"
                x="18.121"
                height="38.735"
                width="33.749"
                fill="#00f"
              />
              <g transform="translate(-.48 2.134)">
                <rect
                  ry="4.928"
                  y="1.229"
                  x="18.601"
                  height="38.735"
                  width="33.749"
                  fill="url(#b)"
                />
                <g fill="#ececec">
                  <path d="M22.435 17.62l4.684 4.685 5.044-5.044v19.352h6.625V17.26l5.044 5.044 4.683-4.684-13.04-13.04z" />
                  <path d="M22.435 17.62l4.684 4.685 5.044-5.044v19.352h6.625V17.26l5.044 5.044 4.683-4.684-13.04-13.04z" />
                </g>
              </g>
            </g>
          </svg></div>
        )}

    </div> );
}
 
export default GotoTop;
