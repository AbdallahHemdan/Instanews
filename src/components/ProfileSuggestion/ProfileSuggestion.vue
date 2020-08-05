<template>
  <div class="suggestions">
    <div class="left-btn" @click="scroll_left">
      <img src="./../assets/left-arrow.png" alt="left arrow" class="arrow" />
    </div>
    <div class="right-btn" @click="scroll_right">
      <img src="./../assets/right-arrow.png" alt="right arrow" class="arrow" />
    </div>

    <div class="suggestions__header">
      <div class="suggestions__title">Suggested</div>
      <div class="suggestions__seeall" data-toggle="modal" data-target="#seeall">
        See All
      </div>

      <div
        class="modal fade"
        id="seeall"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal__header">
              <div class="modal__title">Similar Accounts</div>
              <div class="modal__close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </div>
            </div>

            <div class="modal-body">
              <follow-item
                v-for="(suggestion, index) in suggestions"
                :key="index"
                :following="suggestion"
              ></follow-item>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="suggestions__items">
      <user-suggestion
        v-for="(suggestion, index) in suggestions"
        :key="index"
        :suggestion="suggestion"
      >
      </user-suggestion>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileSuggestion',
};
</script>

<style lang="scss" scoped></style>
