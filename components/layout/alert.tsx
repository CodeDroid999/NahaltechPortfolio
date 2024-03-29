import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames'


type Props = {
  preview?: boolean
}

const Alert = ({ preview }: Props) => {
  return (
    <div className="container-fluid">
      <div className="contact_link-container">
        <a href="https://maps.app.goo.gl/RR6QXHVEXpAxqWVz6" className="contact_link1">
          <FontAwesomeIcon icon={faLocationDot} size="2x" style={{ color: '#e8b602' }} />
          <span className="pl-2">
            Munuku, Juba </span>
        </a>
        <a href="https://wa.me/0719230590" className="contact_link2">
          <FontAwesomeIcon icon={faPhone} size="2x" style={{ color: '#e8b602' }} />
          <span className="pl-2">
            Call : (+254) 719 230590
          </span>
        </a>
        <a href="mailto:sscholy@gmail.com" className="contact_link3">
          <FontAwesomeIcon icon={faEnvelope} size="2x" style={{ color: '#e8b602' }} />
          <span className="pl-2">
            sscholy@gmail.com
          </span>
        </a>
      </div>
    </div>
  )
}

export default Alert
