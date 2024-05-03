import React from 'react';

interface PageProps {
    number: number;
}

const defaultNumber = 5;

const Page: React.FC<PageProps> = ({ number }) => {
    return (
        <main className='w-full flex justify-center '>
            <div className='px-8 py-6 border bg-white flex items-center'>
                <div className='px-4  py-4 border bg-slate-200 rounded-full font-semibold mr-4'>

                </div>
                <div>
                    hello {number}
                    <div className='mt-2 font-thin '>
                        see all
                    </div>
                </div>
            </div>
            <div className='px-8 py-6 border bg-white flex items-center'>
                <div className='px-4  py-4 border bg-slate-200 rounded-full font-semibold mr-4'>
                    R
                </div>
                <div>
                    hello
                    <div className='mt-2 font-thin '>
                        see all
                    </div>
                </div>
            </div>
            <div className='px-8 py-6 border bg-white flex items-center'>
                <div className='px-4  py-4 border bg-slate-200 rounded-full font-semibold mr-4'>
                    R
                </div>
                <div>
                    hello
                    <div className='mt-2 font-thin '>
                        see all
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Page;
