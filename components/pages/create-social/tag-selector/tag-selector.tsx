import { InputHTMLAttributes, MouseEventHandler, useState } from 'react'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Tag from 'components/common/tag'

import styles from './tag-selector.module.css'

interface TagSelectorProps
  extends Pick<InputHTMLAttributes<HTMLInputElement>, 'name' | 'required'> {
  tags: string[]
}

const TagSelector = (props: TagSelectorProps) => {
  const { tags, name, required } = props
  const [selectedTags, setSelectedTags] = useState('')
  const selectedTagsArr = selectedTags.length ? selectedTags.split(',') : []

  const handleSelect: MouseEventHandler<HTMLDivElement> = (event) => {
    setSelectedTags(
      [...selectedTagsArr, event.currentTarget.innerText].join(',')
    )
  }

  const handleDeselect: MouseEventHandler<HTMLDivElement> = (event) => {
    setSelectedTags(
      selectedTagsArr
        .filter((tag) => tag !== event.currentTarget.innerText.trim())
        .join(',')
    )
  }

  return (
    <div>
      <div className={styles.tagSelector}>
        {selectedTagsArr.map((tag) => (
          <Tag key={tag} selected onClick={handleDeselect}>
            {tag} <FontAwesomeIcon icon={faClose} />
          </Tag>
        ))}
      </div>
      <div className={styles.tagSelector}>
        {tags
          .filter((tag) => !selectedTagsArr.includes(tag))
          .map((tag) => (
            <Tag key={tag} onClick={handleSelect}>
              {tag}
            </Tag>
          ))}
      </div>
      <input
        className={styles.tagInput}
        name={name}
        required={required}
        readOnly
        value={selectedTags}
      />
    </div>
  )
}

export default TagSelector
