import React from 'react';
import Header from './Header';
import RightNavBar from './Layout-component/RightNavBar';
import { Link, useLoaderData } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const news=data.data[0]
    // console.log(news);
    

    return (
        <div>
            <header>
                <Header />
                
            </header>
            {/* <nav className='w-11/12 mx-auto'>
            <Nav/>
            </nav> */}
            
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5'>
                <section className='col-span-9'>
                    <h2 className='font-semibold mb-3'>Dragon News</h2>
                    <div className="card bg-base-100 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src={news?.image_url}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title">{news?.title}</h2>
                            <p>{news?.details}</p>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions">
                                <Link to={`/category/${news?.category_id}`} className="btn btn-primary">Back To Category</Link>
                            </div>
                        </div>
                    </div>

                </section>
                <aside className='col-span-3'>
                    <RightNavBar />
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;