import React, { useState, useEffect } from 'react';
import Page from '../../components/layout/Page';
import api from '../../services/api';
import { useQuery } from 'react-query';

function Content() {
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useQuery(`/api/gallery`, () => api.get(`/gallery`), {
    onSuccess: async (response) => {
      const gallery = await response.data.data;
      setImages(gallery);
      setIsLoading(false);
      return true;
    },
  });

  if (isLoading) {
    return (
      <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
        <div className="flex flex-wrap -m-1 md:-m-2">
          {[...Array(6)].map((i) => (
            <div className="flex flex-wrap mb-3 w-1/3 animate-pulse h-52">
              <div className="w-full m-1 md:m-2 h-full rounded dark:bg-gray-300" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="overflow-hidden text-gray-700 ">
      <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
        <div className="flex flex-wrap -m-1 md:-m-2">
          {images &&
            images.map((item) => (
              <div className="flex flex-wrap w-1/3">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src={item.image}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default function () {
  return <Page title="Галерия" content={<Content />} />;
}
