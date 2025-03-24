import { FaFreeCodeCamp, FaGithub, FaLinkedinIn } from 'react-icons/fa'

const SocialLinks = () => {
  return (
    <>  <a href="https://learn.microsoft.com/en-us/users/bhushankumaryadav-9265/"
               target="_blank">
                <span className="bannerIcon">
                  <FaFreeCodeCamp/>
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/bhushan-kumar-yadav-840200333/"
                target="_blank"
              >
                <span className="bannerIcon">
                  <FaLinkedinIn />
                </span>
              </a>
              <a href="https://github.com/Bhuvancode200" target="_blank">
                <span className="bannerIcon">
                  <FaGithub />
                </span>
              </a></>
  )
}

export default SocialLinks