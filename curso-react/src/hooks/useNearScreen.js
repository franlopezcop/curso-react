import { useState, useRef, useEffect } from 'react'
export default function useNearScreen({distance = '100px'}={}){
    const [isNearScreen, setShow] = useState(false)
    const fromRef = useRef()
    useEffect(()=>{
        let observer
        const onChange = (entries, observer) =>{
            const element = entries[0]
            if(element.isInstersecting){
                setShow(true)
                observer.disconnect()
            }
        }
        Promise.resolve(
            typeof IntersectionObserver !== 'undefined' 
            ? IntersectionObserver
            : import('intersection-observer')
        ).then(() =>{
            observer = new IntersectionObserver(onChange, {
                rootMargin: distance
            })
            observer.observe(fromRef.current) 
        })
        return () => observer && observer.disconnect()
        //abria que ponerle uyna altura minima al sector de ultima busqueda asi no se rompe esto
    })
    return {isNearScreen, fromRef}
}