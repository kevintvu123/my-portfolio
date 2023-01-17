import React from 'react'
// import Skill from './Skill'
import { motion } from 'framer-motion'

type Props = {}

export default function Skills({ }: Props) {
    return (
        <div className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 max-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Skills
            </h3>

            <div className='grid grid-cols-4 gap-5'>
                <div className='group relative flex'>
                    <motion.img
                        initial={{
                            x: -200,
                            opacity: 0
                        }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
                        className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32'
                    />
                </div>
                <div className='group relative flex'>
                    <motion.img
                        initial={{
                            x: -200,
                            opacity: 0
                        }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
                        className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32'
                    />
                </div>
                <div className='group relative flex'>
                    <motion.img
                        initial={{
                            x: -200,
                            opacity: 0
                        }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        src="data:image/png;base64,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"
                        className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32'
                    />
                </div>
                <div className='group relative flex'>
                    <motion.img
                        initial={{
                            x: 200,
                            opacity: 0
                        }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQoAAAC+CAMAAAD6ObEsAAAAWlBMVEX///9h2vta2ftW2PtR1/ub5vz7/v/2/f9p3PuN4/yn6f2U5fzV9P7y/P+57f3p+f6D4fzi+P6w6/3M8v7b9v7E8P2i6Py97v103vvt+v7R8/7I8f184Pys6v3X/r5lAAAK3ElEQVR4nO1d2aKiuBaVRGZkFEWF///NC9kZIQmertIi52a9tMXUZJM9r+ScTh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4e/y+Ion/9Bn8dVZkOwzCmbfH22B59OCYoSOq2+eSbfRlVijEKZiCEUfp8445LOcy3sHvqx8df8Uu4gxwoEA7a2H5DFSL1FvT6zpt+GuU5WAGjzKInVa7IAe7ov/e+n8MTr8e1fOfgbrg8usmC4D/xLzAYMVeLIQmwGCYetIPrxOhnJRnGMaFWJvn2i/993MhIcH2dVSJ69CnCfKTZ5uI4FWeT7EpMSjPCE8qvv/pfxgW+ac4PxGWC+cSo1IsLNiVmp1GIwykc/dIbfwwlGbc6u19MGAgrFiNj9nWeQ/LxCA52X3jdT2Igo1j7whLRz4/FdIlGKiCcrCOP+3IGpR9/2Y/igfVz+8KMAhoucKRiyqExIRGccjsIf5HvedOc6ejEQIh4EuZyUaJzLMRaOO5Pif/A2lD7whWioyqgKoyMfjmNTaGIGyCO8HzRn8zY+PuW/9Jf2ZDJFX7uPb+AxOoGO+Y7qa4EJhWIiCjGD73kV0BCTcsQqkAOsgdzlpZsXbJjeKAdLxgPIhK3OUuIOP/6+30R1b6Op0xJdG5GvQrt5PaHBpi7baAg4cZE0dquyp0XRbUriomn8FZfGRJRGDyRE9gVxV0qZmzCcwnui6IxBpuADsvO9Hw1Xpg6LwrwIEaz2YAkcJtTkRjLuWBcXbYVdmcKtYwAz6KqqfE0DdZ9ZwohVm04CzEFSIr+NkVj7odYp8AyhFQefZQgSzp2Qs4H3lC5QdpTkIIhVoVg2qJ1qfF5J2p1AOTLn3XWsFhbyiu1oTo3ct0P1Q6PidQriu2JmPpP6VR/NprO7hfUK0jNBWnGAC4BKRX9DJmsrFGiDsFUc2FVm/s0hRTtdKdR5zYbgQjL7SYyGMNBHIirrsxSnpojBezgkGbls5IUxV4BcgRkEJj8fHRTnaCFK7DpDq8xX4JxkKRtR2YCOBC3fSmrVRfXtg4YYeJ9EIHU7fX1CxzI0vwhY/qxFBR5QPT1DkXlwIhbowiIEqxhUR50dzgbi/p6OzJ2AIdZ23dF0TTN5fG4zP+5Fl1fZjnrDW3vRPXLzQZZkassIqL5aAhr+Icxcw9pdJEPeG1d5gfm5prGQRHdE1UO86jqrFtIBPSA+V44v+RwTZfVi+VUpJHcXZoalwwp7z8PrGdUClKwtRWsTgUJwHntq7mvFAWjzBWrEctsKmb+2ZeEpMveDwAV4d1i6MbL2oYcEUYr9Hue3HkBkQUr4Q5vMGiAQ4BYjFpCVbBIJSYXsvcKDoEi4KqBzvUiAMjIaEkGKtx7BBqo/rJMdGS5WPSqz6KZlhw7O4ty0dYIJihQUzYW0ZDImHuqqKV7LvBI0LDHJESN8wPbz0ZEDYloasBXJROBWoHdFPMhWZS7PKtm9JzWZu68/3Pw/g5OuvVhUo2rYIRKMhF14RgEY/hUPjE0zfDidsYNW6UTHL+DknwzHieqLwgzfPEh9dZm3iCMWsIvRUIB06THWegKx53T2qZPjeZPwCRxDtcqTCQwG0FwpPKXbGR+BZbn+wuuvZ5IEoPWhfAopNU/DYntn6OkZdtga9h7ypkZ13Wc54oIL5d4idedHSoUPLYPZXTX47F8aQEb1xqrDiVdDNV+Kc5sNkR4yaA2oBiZMQ5hPM/zwZxqRIei7xRDsL1xpGtBBEr3KJVu0mtBSEV5LJ9KSe0Gxb2Kz38WtO5pMymU6V4J7cGV7qnMPNn5Ot8GOImNceNI2KCkDlesWycid9JyXvY1VjXpzDkS2UBHapfBIw5pUry0opAM5IOz381xerKaSv8e2zBIRcwIV1LbM0c6Ucg5K7/C/D/ujkboBKNp6/mHaD0poLO8FYVkVum0QLYwClTvOIbzskfPPFUSlYJCKwlVoPm+KTgaM2lfFDQ9lSs274vClr0dTRT7CjLR0FB65/cVxBZbH01BRHXFBJtRVEWhuUJPVSF4Hs1sQs5kmRY9z6rFtPiBMzWn4sdzpped4q3onItLordDLDmDU/GGXf067IF3JUYtJVyTRkMMgbehWnXEwJutMTakY5mUWUlLCHXGQtwkp2P6x96ohA/WCKClB22STktSMHOkKKvZrttfn0SlYUniLMmaJumH67C3rHSz7XvBasGBVmMkc/9ayUIeFXFKs2uFharbLOTKSjcHbIjwgt5tPTFgMUdJyzvyeK9ye1gp6NFWSGNYbnvogp5U5g1U5wc2YXGj48bnRhMv86r9LuIlFwlALr9aFdNb1uceAqVYdy9HW5A9LlEkVPDUMCDqwjpI6pta/Ad1I+4GGo2ydJ+i+H9YKudVtIQG0RKSxpLzCWLHRfKSLy5JwEtqCR2YbBHx/SdmzW9hxFQ/yAyPtwmqFqncXJQ15NJKjcL0QKmHBk+pfYzTxfAX8lcFHdorUgPDgs3+lDcau1rqpQfH38RhkkkFKC9CJCs1zUftj4CbWbhNW/FXmdCEjtkWW+MSaqgmzDxc34iVITjl/aFoSzXB4aHSDgsutzUBKeAEJCjtnS09cBpnssSt6hP1URjdXGJ7LzvaqLS0c1BPz2UI8G9LnSfhF1TdpKGl7W0wdjwU6ZaseEZjWNsyrBNPN+twROctWfGtbeeOh1hDYeV0XXwr+2dB+Ktkm6iFxVp0fSuoCZtb8egyoTcuLcRmxmY+zxDMZuP1N1dMpQFPZv7/mO6OjlS2+y/IgKpYTOMfLIIoVrG3m4DNboiKV6+fLY1BSTrB0piTsX7jEsgYJM95aV7lrU72F0x18oIpWK7qUjSxhWlROuNWtO0tDMM8J+voWjimqUGEe30WBwBarskX6OJKpVxDVxRpGjx35L7dJOU4HT+CLbmVThW0L6iJHYqdfTBcADgQ49pqucVBt9vTqgFplDnuQlLhQNZg5T8aODFim76AvdOIdAFQwtefo10+OkB5M4stDtcw/zmsW3DI23ek6hqQNcaD0Sj+A0wugYDtYJxyCqZxsO4vSo9tk563lXHYrm3oGhBYGOibTmCPmcT8J+35mQu3sG/nYZd/vAEQhWXNXC91TW39ncz5cHNnX6yT1FGzL+1wXxSxdjGHArZo3b4RQfZLFMTaDOM7K1qvct9sRlZnukB0Fm2bsNIOmcvOdG+Xs0hswrq0/sxf/ReEWEDoNAXMbGteVrRBRm8K5z/0kt9BaDN3jM2Jp479MtjOC/G5Rs6iEyg3PBEBtt5poZ4U7PeoVYLnL9jH+7paOizQsPomxJhCV3RKclO68W4CqhBoaywm2kTki6ljvu99up0YcMJlX3oSy21VFAlXCOFBGekObYqY3c56LDfQyfsMUDQ1X0qmlCt71m7GiWpdgK7nBLnEhk0oWXAWEUKrtvhjEAv8S6EmlMzmdIC1gNIOa2IS4uskeBc6ozCJsyjtq6XHTueQPZNxA1CWRDip6yGQaWXabbubUUTiyzZ6/Ba3Q00AX3ost0oRvpkyjl5w/CTY9jt3B/fN0BBOLY4xarfCOCqB+afoV0QknO8UHqI2Wf2FR7d7hBKqmlErZv0f2ne0vsgDyj5Y/oinyzWbNZppTAKUDPn9bZcYXdt0HJIhbR2PMjX4hX+818PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDhP8B0elfduVj0+IAAAAASUVORK5CYII="
                        className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32'
                    />
                </div>
                <div className='group relative flex'>
                    <motion.img
                        initial={{
                            x: -200,
                            opacity: 0
                        }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"
                        className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32'
                    />
                </div>
                <div className='group relative flex'>
                    <motion.img
                        initial={{
                            x: -200,
                            opacity: 0
                        }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                        className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32'
                    />
                </div>
                <div className='group relative flex'>
                    <motion.img
                        initial={{
                            x: 200,
                            opacity: 0
                        }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                        className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32'
                    />
                </div>
                <div className='group relative flex'>
                    <motion.img
                        initial={{
                            x: 200,
                            opacity: 0
                        }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        src="https://www.clipartmax.com/png/middle/89-894960_js-discord-bot-logo-node-js-and-react-js.png"
                        className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32'
                    />
                </div>
                <div className='group relative flex'>
                    <motion.img
                        initial={{
                            x: -200,
                            opacity: 0
                        }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        src="https://download.logo.wine/logo/PostgreSQL/PostgreSQL-Logo.wine.png"
                        className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32'
                    />
                </div>
                <div className='group relative flex'>
                    <motion.img
                        initial={{
                            x: 200,
                            opacity: 0
                        }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        src="https://ih1.redbubble.net/image.1470587088.2816/st,small,507x507-pad,600x600,f8f8f8.jpg"
                        className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32'
                    />
                </div>
                <div className='group relative flex'>
                    <motion.img
                        initial={{
                            x: 200,
                            opacity: 0
                        }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        src="https://dwglogo.com/wp-content/uploads/2018/03/SQLite_Vector_logo.png"
                        className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32'
                    />
                </div>
                <div className='group relative flex'>
                    <motion.img
                        initial={{
                            x: 200,
                            opacity: 0
                        }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        src="https://cdn-images-1.medium.com/max/3528/1*Yejyd-So5Ze1ksQzKW43DA.png"
                        className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32'
                    />
                </div>
            </div>
        </div>
    )
}