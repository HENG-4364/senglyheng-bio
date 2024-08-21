import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa"
const socials = [
  {
    icon: <FaGithub />, path: ""
  },
  {
    icon: <FaLinkedinIn />, path: ""
  },
  {
    icon: <FaYoutube />, path: ""
  },
  {
    icon: <FaTwitter />, path: ""
  },

]
const Social = ({ containerStyle, iconStyle }: any) => {
  return (
    <div className={containerStyle}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} className={iconStyle}>
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Social