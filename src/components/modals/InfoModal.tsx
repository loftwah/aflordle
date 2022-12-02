import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal
      title="How to play AFLordle 🏉"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the AFL player in 6 tries. After each guess, the color of the
        tiles will change to show how close your guess was to the correct AFL
        player.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="C"
          status="correct"
        />
        <Cell value="R" isCompleted={true} />
        <Cell value="I" isCompleted={true} />
        <Cell value="S" isCompleted={true} />
        <Cell value="P" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter C is in the word and in the correct spot.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="F" isCompleted={true} />
        <Cell value="L" isCompleted={true} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="Y"
          status="present"
        />
        <Cell value="N" isCompleted={true} />
        <Cell value="N" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter N is in the word but in the wrong spot.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="H" isCompleted={true} />
        <Cell value="A" isCompleted={true} />
        <Cell value="W" isCompleted={true} />
        <Cell isRevealing={true} isCompleted={true} value="K" status="absent" />
        <Cell value="S" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter K is not in the word in any spot.
      </p>
    </BaseModal>
  )
}
