import { Link } from "react-router-dom";


function Checkout() {
    return (
        <>
            <div class="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
                <Link class="text-2xl font-bold text-gray-800">Ak Doodle
                </Link>
                <div class="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
                    <div class="relative">
                        <ul class="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                            <li class="flex items-center space-x-3 text-left sm:space-x-4">
                                <Link class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" href="#"
                                ><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg
                                    ></Link>
                                <span class="font-semibold text-gray-900">Shop</span>
                            </li>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                            <li class="flex items-center space-x-3 text-left sm:space-x-4">
                                <Link class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" href="#">2</Link>
                                <span class="font-semibold text-gray-900">Shipping</span>
                            </li>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                            <li class="flex items-center space-x-3 text-left sm:space-x-4">
                                <Link class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" href="#">3</Link>
                                <span class="font-semibold text-gray-500">Payment</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                <div class="px-4 pt-8">
                    <p class="text-xl font-medium">Order Summary</p>
                    <p class="text-gray-400">Check your items. And select a suitable shipping method.</p>
                    <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                        <div class="flex flex-col rounded-lg bg-white sm:flex-row">
                            <img class="m-2 h-24 w-28 rounded-md border object-cover object-center" src="data:image/png;base64,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" alt="" />
                            <div class="flex w-full flex-col px-4 py-4">
                                <span class="font-semibold">You choose a very good doodle</span>
                                <span class="float-right text-gray-400">42EU - 8.5US</span>
                                <p class="text-lg font-bold">$138.99</p>
                            </div>
                        </div>
                        <div class="flex flex-col rounded-lg bg-white sm:flex-row">
                            <img class="m-2 h-24 w-28 rounded-md border object-cover object-center" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX19fUAAAD////39/fz8/Pu7u78/Pzq6urw8PDo6Ojl5eV2dnZ+fn7h4eFUVFRZWVlkZGS9vb07Ozvb29uNjY3V1dWbm5siIiLNzc2mpqZeXl4tLS1ERERKSkpxcXFsbGzBwcGTk5Ozs7M0NDQaGhoRERGqqqo6Ojqfn58lJSUsLCyGhoYLCwtnX344AAAP/0lEQVR4nO1dCXuiTAxmkrmg1Wq929pabV277f//fV8CHoAHjMIs9vPdZw9d6BCSSTKZJBMEN9xwww033HDDPwMC/OtHqBnw0v/lJMLH92+ncHR/o/DKAR+/nsLnX0chYuZj/RRi8SXVjmdM5nPdFKIMrV8albQq/bl2HhqMav35WUhEY5W1qa/gb60UopWRjvwxkURUhTIzIDzWSCGJqIqkUcVXVjWgCZiDmTcKf2qkUBoMaV54YyFKY21GRINaKURpLZHojT4bKCPDID9gfVJqMcJIKlt8ZUXAljVS7mnuGimMiH8+RVTJEI3cM8Dw564WCjFQ1pCp8GbxMTT0Ss3+aPBSD4XWhNZ6NPbIGvSgWYJpLRSSgCLR51GLSoWBUQcGrJHCnH9YJ9Ao+mUCfxSSiBpjvVGISpEpRBMe+s86KCQzQUrNn8tNImpil/TgeDVQSJOepOXYgNUjFtGD7ItRA4Uh6dBDE6IuKEMic3y86ikkEQ2srPZnngIbCTzOwuoppPUZenTVYrROrV6gXTUP0USeV/XBSfe+egpJd3um8PRoNVBI2rvqn3gJoP3626KJOdwovH78Hyh8++0UPtwovHb8Dyh8ulF47YCnzm+nsPPrKfyXPPQS50jz0Pt+tFLqRPihImwppJGMMv62GQiS4421by5C52nNQ94eRuOTkdZajnTWPEqKQhrM+tuuJUiS0vpHTPNQKlv/tEgBraG3WjsP3562mobnoVd1gz6ixmkKvUWpvSJN4e/E/4HChxuFV44bhdeP/xWFv84YImogvD1o5L/1LyOQiFPjyX178SEIn4v2/XJsAX6LU4OgB/1HkeCDsP7ny3uPiPzXT5fGeX6khtb3iEl7G3Z7xrL3a1WvO3z6pC//rOxRGtFP1CE9ogndl48axm2i5HHSiuceYuzg05zUoHvvX/Rf3+YYjTI6kRBw9Cndb9neqlAqx91WhDFL59Bsp9zuAZDr2AZ3TCPqgzcbbXzuXyPS+hhdVsgSwTwI8TzXxycbgu0Tjd1DNhKNQX+paklSunXKgkdY0uybFxQc0mt4E+ItbzxoPW4498gfD5WUyi0vR2OHBFAXezAIsx/xJ0pJKsYJHcYGHjN+rVLWJRCHUrcW4mNczhhoMxVioNNzlFjoMSmdZmCEkZuIwkCIB6tLqjbUd0zi5qOSxqrQn4gihoZz7l0JvHew5gjfQrTWJGLQilPEvYFYSGbCKe6ne0L03dwVIvFzY1E4696rFrWhlE5zAiMm0GkQ4mJHtON7ZGhZzXi0hAbRLTcO8Y9wr6pA/SFWmt8oBtJncZblKWicWAh3YnrGMlfT3KVxrJK8peF+/3mgseiX2SvuOQU9E6K4MADj7gMZQ09T8RVoOEW/PSkaiTLOh1VO0x4/0l6Y5LXhQaUDg+/7iUwbevsjBlwQhv6S0sltUq6rGOiLDuxYQM739917a19q4S5eJI5TJMJKvMZDudJ37vtgoxS6ZRjzUPFs2n5hX2JC7iHtgWEskgnS7CIdfE5dyNkMt1zH4HoTDNN6FIPnNSF9yEwtVOvvxa6LBEbE14nPAA4aJd0pzLBwyyliTubJWR0lWKQEWI3P0sLn42D1WcEtM5HaekG9JVDM08tc1JPN919p5tpP4TlnO3TV2vAqujtSsLej8D3DnB0PX9Lfw0PKAfcB91CQTqsOTFM4yTw5BpvvV+nv4T13XeNALvc0rWdwR2Er1z5ixV/+iMcsa7ui4f1r9DzrcpPQrrGXCpWQ+JS17TgWDc/sg/v0NGRzuA7/Pu8tZ1Gr7ryX83ZIrNsNp5A0RdYqqCcm8DU4MLtQ79k+bDWewheRc9IRotnsaNA3j+bzUC/27RlqPFa3s3/tQDQ8kwEW4iJlT2ay4T2I9KO4aOFDXu2q2fYQ2nm75wIM4I2WU43acMuDn/CSB9Rfl8lA/SCva3m+lLGX99zsacia4pIKSnpB782ikDuKZL0uKT4ueET9LHonhZRzbi/ZA3W+wyqbC4bDo3CIdeauJAl4PPl+MKTxPMf7uRFN+itS9/NSE5H9gPx35BF1T95smYU+84qZQpvdVURTwIYNoPMKGR4is3Bx2lRwfwi/mdM0Yn5AeBLzEiQe4LWE5wIWBoGJNzI9giZ+fjw9FqOj24bbLToicG/rhhRpYRgKlcdOUOsh976hBdSRfSfSE0nUSdMycu8a3rYooaQa4A/w1tphlQ9TEmCNGnqPYpUnEPFHLJtlC4+CJHB0UGEgy2G3NX8Ro8Eegfql6fGLFMj9PlyghjDgBKnpXOcVCuqnIj3aJKD8FN/7q3r+QoNUwX7mJRP41XCXOwPdEodIjHEo/Q/lVIxUs9eFWUjOVLgrLXTQG4nFVREYJFycBqU0R5wc9oBu2SwNgDbPQvQPJx2mgdBq857GlZHHiNOcRPd0EjCC7Avxd3CNBMYJeSMhvpYajsYSwXDq5fue7bgaaGQCRkN5gEWcuW+Yy68HtvivCKD6Ikl0jjOg4/RniGsRonE3Tg9uXaeA7oCAS86DfvyeDwwtJnvj+ftdZ5O3f38ie/iKoMlP3cNn5/tNZFNNrhjkb7fU7Pu18zJ6eLsfdsc9Wl2spmQwP0XZBNRmAxaiffc+WU5Ww8mkf39/9zrlUovFO6zyOSjXCV7Z7mE67PEcFML3ir16IKfUzFRrNl8y5rPxeDxo2cQRgL4YXrWtiIFSCOAamR22ywuOH1esa/6BSJAmPRaoJ/52SkZXy8N7wxSpfsTxnHscZxOGKhjQKH9FDPGAwfBk+IX0bKU2EfmsAo+FNhinILZOdN/Uc1FlXTB3aVY+K1FsqDmx+dQ1enTJpnF+QKMi67FxOdcuKZHPPsmBHJ7K0rzWIuqPg9wWul/0/GiEqOaZEJWMrMedKUsSo20+cXYfZDBmlega7nbjU0QRQxXIYcEsDOJsxEr6m9GkD7jK2Nv5FjLkKbGXc3noykrEFFWEoXvO9vngkwMsTMqwh8S0aNewGDSaDJ1qeC8d0MoAI/23IO8gBonpxals3OgePTozJKIyDBTOy7lkJMsXeiF8WoENwstY6PQIhqeE1UV5B2vQ8mo/l82pVk5JLjp1qyC8BJxLQFJjB2JUKtCEvUzNhft4fIKHVAePRKkFMjRxWg/ci1WpGAVCUZ7Q6dv5CJZUikDtYL/XsKLBz0JrvwasLvHclEXHGt7LwI0QYudez0qvGshz+zp//7fFIupzScjNF2IhfShv5uDx/JxNDCLrd80bJEXKtKr4KX2LnlyU+xx57/LCdsnloWkVIsQlisJrj1BGHCh8dhG8GiJSdQMHJRP4EujKI1K1g4zhxOGRY5N4XUwEx3h9trb2CpCtJC1zgxGXlaL4hntoAp4qCmb4AVrndbueFwc8GgR63DvHjUGOO14RhbHIufEQoX1ZtY1XcHDJ2ZOGSdMrgFOIhdT1JozE19VQSMuKM/QiLCrcwagXrDTOUPxxzdN15C2cJaRxkfOfui2icm38eBBYVki5zV36M3zULKYcNq6ERClKVUnyiSFBOr5CYrpXo1Ap+HyLKgIeZWPY8WEa6Vo77NXcukVaZauomoK3cqtZLvAxaTGVUI75ZwNDm8QdLwSUDNIThfxGd41Q+N3U632jraIqjFb3JWWN5kSWZbBsWo3sQZC+ODeTK5mIjbf68OfsED0XdzU/k4+87tHZcwlersBxI1txfrk63F9BUPEifUj+3nfjXVP4TNu0Q3UIJ0B6uPFhU1rlpSPBOHSaV/HSufJnqhaxnO2MeM+xFe0VqBp4FbPdI+qxY/e1fCOtBkI/p102vXR8YLrBjenewbuGqSeEb8f4WXmX71+BrGF6+4FMh5uri/hPo6YYFD4uMS1tsmnVXmgusrl2epGScrS+fThTtGEuYUq6cHcNiEURhbqbWV9AZ9fRDo10br150eoP+bSJ0ytkLoJJdz7uFWbuYSu7YIJ+qguTihes/sDHBxTEcUhRpDvm6VlhGJsozOwb7iYyiWjoMyk9kGEQ2qLTCmCS4UjSoeU011VWeRLFyWeMrLEezrbdgV5ngYgG8Y5M2jrAXXExBXxkFlvclpcpxEREPWY6RbJVJKIE+MqEaEjvFLZjoWsykghtUjWST9TwWjcRKmMLRZSvE38TEUs+649i40Z+WqYdKKmaibaRDNFnUnpgTanTGEizpCuA4qq1wnsmWdcVx6R/ORgeekx0kmGEpVqzc1vHhCSunsRSvUjz+pa8mh+aE9b4zNmm6RBiGe+CzHWiaHT3QRd2PU72UGlBmX0NvIDSfnuy8QkeppTaJictmavwwHvAenVqH0IPYy1E5uIzS2GfTUzkjUS0IR+5XuqcIFI067aOpCAhQDYWxysPN4tjeM6E8tHSZNaR2wkeuP3jDEQoTVBuVtB6N0kYQfzgNVTspB59qC2F0218lf9SUoln7a+wgGYgaRpZ7gVxZ8+1sYiDNTg6Ed8lChP3jDi9Cc4NNJ+oASMReTP1MkkSL4nYWPM/0PL+Gv15og0mUZgwnJb1w5hCWnkFhgbE/iUtUB3BKdvFi8IEyJtO6xkRP/1pY7HVoWQA7zbMjCTvKM4yZ5zUCvLUsLxvSE7zS+JSko2jOZZb7+ehfz4TTuFjYvJJyGeSCzWUcwn7BTIdOZx9tqNIz1nwyP4fPW+EE8Fb62MeEPTm/mFgQlpGP/oMKTrotF0EI1k1be3/EeS9MnLypmDs+gd506Wy/ITYvfqENv2TWe/rwhOA9aDFoSBs7AkQehvBgL9sxGG1jpViIDW05u+rAeTmFyaNaDfmcHOwXMspR9wbyN5vUjD0OJ5iuwZXMJjGHU3+zDKBKa3H8zHuEyNzjlxDwOenbJ4rN8VgIsTX93yyyJyJKGGw4FNKlnvhOFi4dFv2BloTpL2vHZBUKxEPGqArRHvbpA5mQjz220I85ScouQ4X1LLVBXK7j4gWd+CZJcYdzN+kSR2BCXwHiHsm5kgkcWjgVrBepfZU0oeP6FDs6hAR3/h8556yrb5IcjZ08CKmm8uR567MH1bTDGydUv63mc9UojcRWqP0xj7CeLE9HmkdGMWFeAPuy0MMXY7J++YsxcZRmN5SSbqXdcbxqYBDPiUop0D77cXo5TvaXK/Vp3iZj01ryRq3HdCM/WxeVjssNzvwvPAV99xPb/H6zmch9fN9EzHuupciG82mRd2o/1d89OfDuvMwzwAp+AlwMEfDkxAD0pzLr+SYp14JbpDa6T89vtzPiO5OQmvjNA2tgaYBc2Y2Ep+RlnxyZTju0nQsFRTEhK+aj5TtLd8nY981k0eR2kgjuex8dz6FmCaOGIcT989zOoptHAFLeLA+sdvehOEobjXXrbfZo/dmvNwUZj0k6NagZ/POdbVAPmjWb922VLtzPOP2pI4/wHFAycn250fD3d9Nkqp9bt7tGbywVvo934K3vS86ffkMHirptXIbjd8DNXgeeu2fEOxHW+oezveAN9xwwwX4DxgrmeshQO38AAAAAElFTkSuQmCC" alt="" />
                            <div class="flex w-full flex-col px-4 py-4">
                                <span class="font-semibold">You choose a very good doodle</span>
                                <span class="float-right text-gray-400">42EU - 8.5US</span>
                                <p class="mt-auto text-lg font-bold">$238.99</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                    <p class="text-xl font-medium">Payment Details</p>
                    <p class="text-gray-400">Complete your order by providing your payment details.</p>
                    <div class="">
                        <label for="address" class="mt-4 mb-2 block text-sm font-medium">Address</label>
                        <div class="relative">
                            <input type="text" id="address" name="address" class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Complete address" />
                            <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                            </div>
                        </div>
                        <label for="city" class="mt-4 mb-2 block text-sm font-medium">City</label>
                        <div class="relative">
                            <input type="text" id="city" name="city" class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="City" />
                            <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                            </div>
                        </div>
                        <label for="email" class="mt-4 mb-2 block text-sm font-medium">Email</label>
                        <div class="relative">
                            <input type="text" id="email" name="email" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" />
                            <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                            </div>
                        </div>
                        <label for="card-holder" class="mt-4 mb-2 block text-sm font-medium">Card Holder</label>
                        <div class="relative">
                            <input type="text" id="card-holder" name="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your full name here" />
                            <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                </svg>
                            </div>
                        </div>
                        <label for="card-no" class="mt-4 mb-2 block text-sm font-medium">Card Details</label>
                        <div class="flex">
                            <div class="relative w-7/12 flex-shrink-0">
                                <input type="text" id="card-no" name="card-no" class="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="xxxx-xxxx-xxxx-xxxx" />
                                <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <svg class="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                                        <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                                    </svg>
                                </div>
                            </div>
                            <input type="text" name="credit-expiry" class="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="MM/YY" />
                            <input type="text" name="credit-cvc" class="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="CVC" />
                        </div>
                        <label for="billing-address" class="mt-4 mb-2 block text-sm font-medium">Billing Address</label>
                        <div class="flex flex-col sm:flex-row">
                            <div class="relative flex-shrink-0 sm:w-7/12">
                                <input type="text" id="billing-address" name="billing-address" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Street Address" />
                                <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <img class="h-4 w-4 object-contain" src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg" alt="" />
                                </div>
                            </div>
                            <select type="text" name="billing-state" class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
                                <option value="State">State</option>
                            </select>
                            <input type="text" name="billing-zip" class="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="ZIP" />
                        </div>


                        <div class="mt-6 border-t border-b py-2">
                            <div class="flex items-center justify-between">
                                <p class="text-sm font-medium text-gray-900">Subtotal</p>
                                <p class="font-semibold text-gray-900">$399.00</p>
                            </div>
                            <div class="flex items-center justify-between">
                                <p class="text-sm font-medium text-gray-900">Shipping</p>
                                <p class="font-semibold text-gray-900">$8.00</p>
                            </div>
                        </div>
                        <div class="mt-6 flex items-center justify-between">
                            <p class="text-sm font-medium text-gray-900">Total</p>
                            <p class="text-2xl font-semibold text-gray-900">$408.00</p>
                        </div>
                    </div>
                    <button class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Place Order</button>
                </div>
            </div>
        </>
    );
}

export default Checkout;