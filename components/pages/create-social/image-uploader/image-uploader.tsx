import { InputHTMLAttributes, MouseEventHandler, useState } from 'react'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

import { BANNER_URLS } from 'common/constant'
import Modal from 'components/common/modal'
import Button from 'components/common/button'

import styles from './image-uploader.module.css'

interface ImageUploaderProps
  extends Pick<InputHTMLAttributes<HTMLInputElement>, 'name' | 'required'> {}

const ImageUploader = (props: ImageUploaderProps) => {
  const [visible, setVisible] = useState(false)
  const [selectedBanner, setSelectedBanner] = useState('')
  const [uploadedBanner, setUploadedBanner] = useState('')

  const handleCancel = () => setVisible(false)

  const handleSelectBanner: MouseEventHandler<HTMLImageElement> = (event) => {
    setSelectedBanner(event.currentTarget.src)
  }

  const handleUploadBanner = () => {
    setUploadedBanner(selectedBanner)
    setSelectedBanner('')
    setVisible(false)
  }

  return (
    <>
      <div
        className={styles.imageUploader}
        style={
          uploadedBanner
            ? { backgroundImage: `url('${uploadedBanner}')`, border: 'none' }
            : undefined
        }
        onClick={() => setVisible(true)}>
        {!uploadedBanner && (
          <>
            <FontAwesomeIcon icon={faImage} /> Add a banner
          </>
        )}
        <input type="text" value={uploadedBanner} readOnly {...props} />
      </div>
      <Modal
        title="Choose a banner"
        footer={
          <div
            style={{
              display: 'flex',
              justifyContent: 'end'
            }}>
            <Button style={{ marginRight: '0.5rem' }} onClick={handleCancel}>
              Close
            </Button>
            <Button
              type="primary"
              disabled={!selectedBanner}
              onClick={handleUploadBanner}>
              Save
            </Button>
          </div>
        }
        visible={visible}
        onCancel={handleCancel}>
        <div className={styles.bannerImagesContainer}>
          {BANNER_URLS.map((url, index) => (
            <div
              key={url}
              style={{
                outline: selectedBanner === url ? '2px solid #f00' : 'initial'
              }}>
              <Image
                alt={`Banner ${index + 1}`}
                src={url}
                width={150}
                height={100}
                onClick={handleSelectBanner}
              />
            </div>
          ))}
        </div>
      </Modal>
    </>
  )
}

export default ImageUploader
