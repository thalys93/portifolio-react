import { useState } from "react"

export default function SobreUtils() {
const [GiconTxt, setIconTxt] = useState(true)
  const GMouseClickIconTxt = () => {setIconTxt(!GiconTxt)}     

  const [LiconTxt, setLiconTxt] = useState(true)
  const LMouseClickIconTxt = () => {setLiconTxt(!LiconTxt)}     

  const [IiconTxt, setIiconTxt] = useState(true)
  const IMouseClickIconTxt = () => {setIiconTxt(!IiconTxt)}     


  const [EiconTxt, setEiconTxt] = useState(true)
  const EMouseClickIconTxt = () => {setEiconTxt(!EiconTxt)}


  const [WiconTxt, setWiconTxt] = useState(true)
  const WMouseClickIconTxt = () => {setWiconTxt(!WiconTxt)}


  const [CiconTxt, setCiconTxt] = useState(true)
  const CMouseClickIconTxt = () => {setCiconTxt(!CiconTxt)}

    return {
        GiconTxt,
        GMouseClickIconTxt,
        LiconTxt,
        LMouseClickIconTxt,
        IiconTxt,
        IMouseClickIconTxt,
        EiconTxt,
        EMouseClickIconTxt,
        WiconTxt,
        WMouseClickIconTxt,
        CiconTxt,
        CMouseClickIconTxt,        
    }

}

