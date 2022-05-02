import { useEffect, useState } from "react"

const useInventories = () => {
          const [cars, setCars] = useState([])

          useEffect(() => {
                    fetch('data.json')
                    .then(res => res.json())
                    .then(data => setCars(data))

          },[])
          return [cars, setCars]
}

export default useInventories;