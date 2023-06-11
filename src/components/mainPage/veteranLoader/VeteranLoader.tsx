import React from 'react'
import ContentLoader from 'react-content-loader'

const VeteranLoader = () => {
    return (
        <div>
        {[...new Array(6)].map((_, index) =>
                <ContentLoader 
                    speed={2}
                    width={466}
                    height={230}
                    viewBox="0 0 400 160"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    key={index}
                    >
                    <rect x="18" y="23" rx="0" ry="0" width="36" height="0" /> 
                    <rect x="40" y="61" rx="0" ry="0" width="0" height="1" /> 
                    <rect x="0" y="-1" rx="0" ry="0" width="500" height="230" />
                </ContentLoader>
        )}
        </div>
    )
}

export default VeteranLoader
