// my-component.stories.js
import readme from './readme.md';

export default {
  title: 'Components/Modal',
  parameters: {
    markdown: readme,
    actions: {
      handles: ['onclick', 'click #modal-button'],
    },
  },
};

export const Default = (theme) => `
<fx-button id="modal-button" onclick="handleIsModalOpen()">Open Modal</fx-button>
<fx-modal id="example-modal" buttons='
[
  {
    "label": "Submit",
    "theme": "danger"
  }
]'>Lorem Ipsum</fx-modal>

<script>
  const handleIsModalOpen = () => {
    modal.isopen = true;
  }

  const modalButton = document.querySelector("#modal-button").addEventListener("click", handleIsModalOpen);
  const modal = document.querySelector("#example-modal");
  modal.addEventListener('action', handleOnClick)
</script>

`
