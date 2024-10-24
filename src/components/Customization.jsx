import {createContext, useContext, useState } from 'react'

const CustomizationContext = createContext({})

const doorColors = [
    {
      color: "#683434",
      name: "brown",
    },
    {
      color: "#1a5e1a",
      name: "green",
    },
    {
      color: "#659994",
      name: "blue",
    },
    {
      color: "#896599",
      name: "mauve",
    },
    {
      color: "#ffa500",
      name: "orange",
    },
    {
      color: "#59555b",
      name: "grey",
    },
    {
      color: "#222222",
      name: "black",
    },
    {
      color: "#ececec",
      name: "white",
    },
  ];

export const CustomizationProvider = (props) => {
    const [material, setMaterial] = useState('wicker')
    const [hands, setHands] = useState(1)
    const [legs, setLegs] = useState(1)
    const [doorColor, setDoorColor] = useState(doorColors[2])
    const [floating, setFloating] = useState(false)

    return <CustomizationContext.Provider value={{
        material,
        setMaterial,
        hands,
        setHands,
        legs,
        setLegs,
        doorColor,
        setDoorColor,
        doorColors,
        floating,
        setFloating,
    }}>
        {props.children}
    </CustomizationContext.Provider>
}

export const useCusomization = () => {
    const context = useContext(CustomizationContext)
    
    return context
} 