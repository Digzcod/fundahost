
import {useState} from 'react'

const useSectionPart = () => {
    const [part, setPart] = useState<string>("phone")

    const handleClickPart = (section: string) => {
        setPart(section)
    }
  return {part, setPart, handleClickPart}
}

export default useSectionPart