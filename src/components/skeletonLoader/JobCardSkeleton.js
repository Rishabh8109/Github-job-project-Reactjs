import React from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function JobCardSkeleton(index) {
   return (
     <>
          <div className="col-sm-4" key={index}>
              <div className=" job-card-loader p-4 mb-5">
                    <div className="company-logo mb-3">
                       <Skeleton circle={true} height={50} width={50} duration={2}/>
                    </div>
                   <div className="company-info mt-2">
                    <SkeletonTheme color="#f4f4f2" highlightColor="whitesmoke">
                       <h5 className="company-title">
                          <Skeleton width={300} />
                       </h5>
                    </SkeletonTheme>
                     <SkeletonTheme color="#f4f4f2" highlightColor="whitesmoke">
                        <p>
                          <Skeleton count={5} width={300} height={10} />
                        </p>
                    </SkeletonTheme>
                   </div>
              </div>
          </div>
     </>
   )
}

export default JobCardSkeleton;
