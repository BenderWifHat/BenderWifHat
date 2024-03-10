import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen">
        <div className="flex flex-col h-screen overflow-x-hidden ">
            <p className="text-4xl text-start p-4 text-white">BENDERWIFHAT</p>
            <div className="p-4 pt-8 bg-[#00a3b5] flex justify-between text-white">
              <div className="flex flex-col space-y-9">
                <p className="text-8xl">
                  WHAT IS $BEN?
                </p>
                <p className="text-4xl w-6/12">
                  Bender is the tribute token from the well-known Futurama saga used to give fans a chance to feel part of the Futurama family
                </p>
                <ol className="steps w-10/12">
                      <li className="step overflow-hidden">
                        <div className="step-circle">1</div>
                        <h3>Buy $BEN</h3>
                      </li>
                      <li className="step overflow-hidden">
                        <div className="step-circle">2</div>
                        <h3>ENJOY THE PUMP</h3>
                      </li>
                      <li className="step overflow-hidden">
                        <div className="step-circle">3</div>
                        <h3>HOLD $BEN</h3>
                      </li>
                      <li className="step overflow-hidden">
                        <div className="step-circle">4</div>
                        <h3>PROFIT</h3>
                      </li>
                      <li className="step overflow-hidden">
                        <div className="step-circle">5</div>
                        <h3>REPEAT</h3>
                      </li>
                    </ol>
                    <button className="flex items-center bg-white text-black px-4 w-48 justify-center py-4 rounded-lg transition-all">
                      <div className="w-7 h-7 rounded-full overflow-hidden">
                        <Image src="/buy2.jpg" width={100} height={100} alt="Metamask"/>
                      </div>
                      <p className="ml-2">BUY $BEN</p>
                    </button>
              </div>
              <div className="flex flex-col space-y-9">
                <Image src="/explain2.png" width={1000} height={1000} alt="Bender" className="rounded-xl" />
              </div>
            </div>
            <div className="p-4 pt-8 bg-[#007582] flex justify-between text-white">
              <div className="flex flex-col space-y-9">
                <Image src="/toickenomics.jpg" width={1000} height={1000} alt="Tokenomics" className="rounded-xl" />
              </div>
              <div className="flex flex-col space-y-9 text-center w-full items-center justify-start p-8">
                <p className="text-8xl">
                  TOKENOMICS
                </p>
                <p className="text-4xl text-red-600">
                  Missed $WIF Don&#39;t miss $BEN.
                </p>
                <p className="text-4xl">
                  TOTAL SUPPLY: 99,999,999.00 $BEN
                </p>
                <a className="text-4xl">
                  TOKEN ADDRESS: G5U15aLhSkMnL9jf19Ar1QDbXNdGg795xZ9PKRbKyJU
                </a>
                <p className="text-4xl">
                  TAX: 0%
                </p>
                <p className="text-4xl">
                  MINT: REVOKED
                </p>
                <p className="text-4xl">
                  OWNERSHIP: RENOUNCED
                </p>
                <button 
                
                  className="flex items-center bg-white text-black px-24 py-4 rounded-lg transition-all">
                  <div className="w-7 h-7 rounded-full overflow-hidden">
                    <Image src="/buy2.jpg" width={100} height={100} alt="Metamask"/>
                  </div>
                  <p className="ml-2">BUY $BEN</p>
                </button>
              </div>
              
            </div>

            {/* Join the community section */}
            <div className="p-4 pt-8 bg-[#00a3b5] flex justify-between text-white">
              <div className="flex flex-col space-y-9 py-4 text-center w-full items-center justify-start px-4 py-24">
                <p className="text-8xl">
                  JOIN US TODAY AND FIND OUT!
                </p>
                <p className="text-4xl">
                  Join the community and be part of the Bender family
                </p>
                <div className="flex space-x-4">
                  <button className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" height="64" width="64" id="Telegram--Streamline-Core"><desc>Telegram Streamline Icon: https://streamlinehq.com</desc><g id="Telegram--Streamline-Core"><path id="Subtract" fill="#ffffff" fill-rule="evenodd" d="M0.25 7a6.75 6.75 0 1 1 13.5 0A6.75 6.75 0 0 1 0.25 7Zm9.002 4.064 1.045 -7.932 -8.165 3.935 2.417 0.876 2.686 -2.076a0.5 0.5 0 1 1 0.611 0.792L5.618 8.38l0 2.726 1.685 -1.604 1.949 1.561Z" clip-rule="evenodd" stroke-width="1"></path></g></svg>
                  </button>
                  <button className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" height="64" width="64" id="Twitter--Streamline-Core"><desc>Twitter Streamline Icon: https://streamlinehq.com</desc><g id="Twitter--Streamline-Core"><path id="Union" fill="#ffffff" fill-rule="evenodd" d="M19.37078857142857 2.6586742857142855c2.9762971428571428 -0.7667611428571428 6.568182857142856 0.29005714285714285 8.75424 2.6181485714285713h2.4537142857142853c0.39337142857142854 0 0.7588571428571429 0.2021942857142857 0.968 0.5352914285714285 0.20914285714285713 0.33307428571428566 0.2322285714285714 0.750262857142857 0.06125714285714286 1.1044342857142857l-2.4128000000000003 4.997691428571429c0.6845714285714285 5.8233371428571425 -1.5933714285714287 11.390902857142857 -6.175542857142856 14.682331428571427 -4.6873828571428575 3.366857142857143 -11.58304 4.215085714285714 -19.759428571428572 0.8649142857142857 -0.43033142857142853 -0.16205714285714287 -0.8020114285714286 -0.4500571428571428 -1.0661714285714285 -0.8269714285714286 -0.269424 -0.38445714285714283 -0.4139565714285714 -0.8425142857142857 -0.4139565714285714 -1.3119999999999998 0 -0.4694857142857143 0.14453257142857143 -0.9275428571428571 0.4139565714285714 -1.3117714285714284 0.26941714285714286 -0.38445714285714283 0.6506742857142856 -0.6765714285714285 1.0919314285714286 -0.8367999999999999 0.02985142857142857 -0.010742857142857143 0.06016 -0.02034285714285714 0.09081142857142857 -0.0288 1.2574857142857143 -0.34089142857142857 2.4597485714285714 -0.8509942857142856 3.5746742857142855 -1.5140342857142857 -2.2090742857142858 -1.3273142857142857 -4.01344 -3.2564342857142856 -5.189609142857143 -5.579725714285714C0.2933942857142857 13.150697142857142 -0.10015291428571428 9.82457142857143 0.6493371428571427 6.662742857142857c0.047657142857142856 -0.3960685714285714 0.19825371428571426 -0.7734628571428571 0.43763199999999997 -1.0941485714285715 0.2613257142857143 -0.3501257142857143 0.6175177142857143 -0.6179885714285714 1.0263862857142856 -0.7719314285714286 0.4088617142857143 -0.15391999999999997 0.8532959999999999 -0.18745142857142855 1.2806102857142856 -0.0965942857142857 0.42692571428571424 0.09076571428571428 0.8189485714285714 0.3018514285714286 1.1296914285714286 0.60832C7.752137142857142 8.481691428571429 10.576937142857142 9.79494857142857 12.532754285714285 10.331885714285713c0.75824 0.20818285714285711 1.3930742857142855 0.3016457142857143 1.8786971428571428 0.33947428571428573 -0.1504457142857143 -2.0122514285714286 0.19216 -3.6890514285714286 0.9506057142857142 -5.015131428571428 0.9242514285714285 -1.616045714285714 2.3927771428571427 -2.5812342857142854 4.008731428571428 -2.9975542857142856Z" clip-rule="evenodd" stroke-width="1"></path></g></svg>
                  </button>
                </div>
              </div>
            </div>
        </div>
    </main>
  );
}
