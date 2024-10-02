<template>
  <div class="add-task">
    <form class="add-task__form">
      <div class="add-task__form-control">
        <input
          type="text"
          class="add-task__input"
          placeholder="Start writing task and press enter to create a task">
        <button class="add-task__submit-btn add-task-btn btn-reset">
          <span class="add-task-btn__icon">
            <svg width="20px" height="20px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <path fill="#333" d="M4 0v6h-3v10h14v-16h-11zM12 11h-5v2l-3-2.5 3-2.5v2h4v-3h1v4z"></path>
            </svg>
          </span>
        </button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.add-task {

  &__form-control {
    position: relative;
    display: flex;
    align-items: center;
  }

  &__input {
    border: 2px solid var(--clr-primary);
    border-radius: 8px;
    padding: 10px 15px;
    padding-right: 30px;
    width: 100%;
    min-height: 40px;

    &::placeholder {
      color: #c7c5c5;
    }
  }

  &__submit-btn {
    position: absolute;
    right: 0;
    height: 100%;
  }
}

.add-task-btn {
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>
