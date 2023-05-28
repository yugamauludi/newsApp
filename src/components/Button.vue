<template>
  <button :class="buttonClass" @click="handleClick">
    <slot></slot>
  </button>
</template>
  
<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    saveButton: {
      type: Boolean,
      default: false,
    },
    editButton: {
      type: Boolean,
      default: false,
    },
    cancelButton: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClass() {
      return {
        'save-button': this.saveButton,
        'edit-button': this.editButton,
        'cancel-button': this.cancelButton,
      };
    },
  },
  methods: {
    handleClick() {
      this.$router.push(this.to);
    },
  },
};
</script>
  
<style scoped>
.button-link {    
  display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
}

.save-button {
  background-color: darkgreen;
  color: #f8f8f8;
  margin-right: 10px;
}

.edit-button {
  background-color: blue;
  color: #f8f8f8;
}

.cancel-button {
  background-color: red;
  color: #f8f8f8;
}

.edit {
  background-color: blue;
  text-decoration: none;
  color: #f8f8f8;
  border-radius: 4px;
  padding: 3px 7px;
}

.edit:hover {
  background-color: darkturquoise;
  color: #222222;
}
.save-button:hover {
  background-color: greenyellow;
  color: #222222;
}
.cancel-button:hover {
  background-color: pink;
  color: #222222;
}
</style>
