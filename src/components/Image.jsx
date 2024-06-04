import React from 'react'

function Image({img}) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full object-cover h-48 w-96 " alt_description={img.alt_description} src={img.urls.regular} alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
                <p className="text-gray-700 text-base">
                {img.alt_description}
                </p>
            </div>
    </div>
  )
}

export default Image