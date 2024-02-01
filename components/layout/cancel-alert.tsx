import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames'
import Link from 'next/link';


type Props = {
    preview?: boolean
}

const CancelAlert = () => {
    return (
        <div className="row bg-gray-800">
            <div className="container bg-gray-800">
                <p className="text-right pt-2"><Link href="/" className="px-2 py-1 border border-yellow-600 rounded text-yellow-600 hover:bg-yellow-600 hover:text-white">
                    Cancel X
                </Link></p>
            </div>
        </div>
    )
}

export default CancelAlert;
