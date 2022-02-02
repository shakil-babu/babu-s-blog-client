
import { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import { darkmodeContext } from "../Components/Layout";
const SkeletonPostCard = () => {
    const [darkmode, setDarkmode] = useContext(darkmodeContext);

    return (
        <>
            <section>
                
                <div>
                    
                </div>

                <main className={darkmode ? 'post_main darkBgg':'post_main lightBgg'}>
                    <div className='post_img'>
                        <Skeleton height={200}/>
                    </div>

                    <div className={darkmode ? 'post_info dark-info':'post_info light-info'}>
                        <Skeleton width={50}/>
                        <Skeleton />
                        <Skeleton/>
                        <Skeleton/>
                        <Skeleton/>
                    </div>
                </main>
            </section>   
        </>
    )
}

export default SkeletonPostCard
