<!-- This is a Vue.js single file component. -->
<!-- Check the Vue.js doc here :  -->
<!-- https://vuejs.org/v2/guide/ -->

<!-- This is your HTML -->
<template>
  <div class="testimonial-container">
    <!-- wwManager:start -->
    <wwSectionEditMenu v-bind:sectionCtrl="sectionCtrl"></wwSectionEditMenu>
    <!-- wwManager:end -->
        <div class="testimonials hidden-mobile">

      <wwObject class="testimonial-title" :ww-object="section.data.title"></wwObject>
      <div class="slides">
        <wwObject class="background" v-bind:ww-object="section.data.background" ww-category="background"></wwObject>
        <div class="testimonial" v-for="(testSlide, index) in section.data.testSlides">
          <wwObject class="testimonial-photo" v-bind:ww-object="testSlide.image" :class="{'selected':index==selectedSlide, 'hidden-before':index<(selectedSlide-2), 'hidden-after':index>(selectedSlide+2)}" @click="selectSlide(index)"></wwObject>

            <!-- wwManager:start -->
             <wwContextMenu
                 tag="div"
                 class="contextmenu"
                 v-if="editMode"
                 @ww-add-before="addSlide(index, 'before')"
                 @ww-add-after="addSlide(index, 'after')"
                 @ww-remove="removeSlide(index)"
             >
                 <div class="wwi wwi-config"></div>
             </wwContextMenu>
             <!-- wwManager:end -->
        </div>
      </div>
      <section>
        <i class="prev-arrow testimonial-control fas fa-chevron-left" @click="previousSlide()" style="font-size:60px;color:#fff;"></i>
        <div class="testimonial-text">
          <wwLayoutColumn tag="div" :ww-list="section.data.testSlides[selectedSlide].items" @ww-add="add($event)" @ww-remove="remove($event)">
                <wwObject v-for="wwObj in section.data.testSlides[selectedSlide].items" :key="wwObj.uniqueId" :ww-object="wwObj"></wwObject>
          </wwLayoutColumn>
        </div>
        <i class="next-arrow testimonial-control fas fa-chevron-right" @click="nextSlide()" style="font-size:60px;color:#fff;"></i>
      </section>
    </div>

    <v-touch
        ref="swiper"
        :enabled="!editMode"
        @swipeleft="nextSlide()"
        @swiperight="previousSlide()"
        :swipe-options="{ direction: 'horizontal', threshold: 10, velocity: 0.2 }"
        class="testimonials mobile-wrapper"
    >
    <wwObject class="testimonial-title" :ww-object="section.data.title"></wwObject>
      <div class="slides">
        <wwObject class="background" v-bind:ww-object="section.data.background" ww-category="background"></wwObject>
        <div class="testimonial" v-for="(testSlide, index) in section.data.testSlides">
          <wwObject class="testimonial-photo" v-bind:ww-object="testSlide.image" :class="{'selected':index==selectedSlide, 'hidden-before':index<(selectedSlide-2), 'hidden-after':index>(selectedSlide+2)}" @click="selectSlide(index)"></wwObject>

            <!-- wwManager:start -->
             <wwContextMenu
                 tag="div"
                 class="contextmenu"
                 v-if="editMode"
                 @ww-add-before="addSlide(index, 'before')"
                 @ww-add-after="addSlide(index, 'after')"
                 @ww-remove="removeSlide(index)"
             >
                 <div class="wwi wwi-config"></div>
             </wwContextMenu>
             <!-- wwManager:end -->
        </div>
      </div>
      <section>
        <i class="prev-arrow testimonial-control fas fa-chevron-left" @click="previousSlide()" style="font-size:60px;color:#fff;"></i>
        <div class="testimonial-text">
          <wwLayoutColumn tag="div" :ww-list="section.data.testSlides[selectedSlide].items" @ww-add="add($event)" @ww-remove="remove($event)">
                <wwObject v-for="wwObj in section.data.testSlides[selectedSlide].items" :key="wwObj.uniqueId" :ww-object="wwObj"></wwObject>
          </wwLayoutColumn>
        </div>
        <i class="next-arrow testimonial-control fas fa-chevron-right" @click="nextSlide()" style="font-size:60px;color:#fff;"></i>
      </section>
    </v-touch>
  </div>
</template>

<!-- This is your Javascript -->
<!-- ✨ Here comes the magic ✨ -->
<script>
const VueTouch = require('vue-touch')

Vue.use(VueTouch, { name: 'v-touch' })

import { getNewSlide } from "./defaultSlide"

export default {
  name: "__COMPONENT_NAME__",
  props: {
    // The section controller object is passed to you.
    sectionCtrl: Object
  },
  data() {
    return {
      selectedSlide: 2
    }


  },
  computed: {
    //Get the section object here !
    // It contains all the info and data about the section
    // Use it has you like !
    section() {
      return this.sectionCtrl.get();
    },
    editMode() {
        return this.sectionCtrl.getEditMode() == 'CONTENT'
    },
  },
  created() {

    //Initialize section data
    this.section.data = this.section.data || {};
    let needUpdate = false;

    if (!this.section.data.testimonialText) {
      this.section.data.testimonialText = wwLib.wwObject.getDefault({
        type: 'ww-text',
        data: {
          text: 'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
          align: 'center'
        }
      });
      needUpdate = true;
    }

    if (!this.section.data.title) {
      this.section.data.title = wwLib.wwObject.getDefault({
        type: 'ww-text',
      });
      needUpdate = true;
    }

    if (!this.section.data.testimonialPhoto) {
      this.section.data.testimonialPhoto = wwLib.wwObject.getDefault({
        type: 'ww-image'
      });
      needUpdate = true;
    }

    if (!this.section.data.testimonailsNumber) {
      this.section.data.testimonailsNumber = 3;
      needUpdate = true;
    }

    if (_.isEmpty(this.section.data.testSlides)) {
                this.section.data.testSlides = [];
                for (let i = 0; i < 5; i++){
                  this.section.data.testSlides.push(
                    {
                    image: wwLib.wwObject.getDefault({
                      type: 'ww-image'
                      }),
                      items: []
                    }
                  )
                }
                needUpdate = true;
            };

    if (!this.section.data.background) {
        this.section.data.background = wwLib.wwObject.getDefault({ type: 'ww-color'/*'ww-image', src: 'assets/testimonial-background.png'*/ });
        needUpdate = true;
    }


    //Initialize image
    if (!this.section.data.wewebWP) {
      this.section.data.wewebWP = wwLib.wwObject.getDefault({
        type: 'ww-image',
        data: {
          url: 'http://cdn.wewebapp.io/public/images/weweb-wp.png'
        }
      });
    }

    if (needUpdate) {
      this.sectionCtrl.update(this.section);
    }


  },
  methods: {
    add(options) {
      this.section.data.testSlides[this.selectedSlide].items.splice(options.index, 0, options.wwObject);
      this.sectionCtrl.update(this.section);
    },
    remove(options) {
      this.section.data.testSlides[this.selectedSlide].items.splice(options.index, 1);
      this.sectionCtrl.update(this.section);
    },
    previousSlide() {
      this.selectedSlide = this.selectedSlide - 1;
      if (this.selectedSlide < 0) {
        this.selectedSlide = this.section.data.testSlides.length -1
      }
    },
    nextSlide() {
      this.selectedSlide = this.selectedSlide + 1;
      if (this.selectedSlide > this.section.data.testSlides.length -1) {
        this.selectedSlide = 0
      }
    },
    selectSlide(index) {
      this.selectedSlide = index
    },
    addSlide(_index, where) {
    try {
        const up = (where == 'after') ? parseInt(1) : 0;
        const index = _index + up
        const newCard = getNewSlide()

        this.section.data.testSlides.splice(index, 0, newCard);
        this.sectionCtrl.update(this.section);
    } catch (err) {
        wwLib.wwLog.error('ERROR : ', error);
    }
    },
    removeSlide(index) {
        try {
            this.section.data.testSlides.splice(index, 1);
            if (!this.section.data.testSlides.length) {
                this.addSlide(0, 'after');
            }
            this.sectionCtrl.update(this.section);
            this.previousSlide()
        } catch (error) {
            wwLib.wwLog.error('ERROR : ', error);
        }
    },
  }
};
</script>

<!-- This is your CSS -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Add lang="scss" or others to use computed CSS -->
<style scoped>
.background {
    position: absolute;
    width: 100%;
    height: 120%;
    top: 0;
    left: 0;
  }

  .testimonial-title {
    z-index: 2;
  }

  .slides {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
    padding: 150px 0;
  }

  .testimonial-photo.selected {
    border: 20px solid #fff;
    border-radius: 2%;
    height: 20vw;
    width: 20vw;
    margin: 0;
  }

  .testimonial-photo.hidden-before, .testimonial-photo.hidden-after,
  .testimonial-photo.hidden-before + .contextmenu, .testimonial-photo.hidden-after + .contextmenu {
    display: none;
  }

  .testimonial {
    align-self: center;
  }

  .testimonial-photo {
    width: 10vw;
    height: 10vw;
    margin: -50px 1px 0 1px;
    cursor: pointer;
    transition: height 3.5s ease, width 3.5 ease;
  }

  .testimonial-text {
    width: 50vw;
    margin: auto;
  }

  section {
    display: flex;
    flex-direction: row;
  }

  i {
    width: 25vw;
    margin-top: -175px;
    text-align: center;
    pointer-events: all;
    z-index: 1;
  }

  i:hover {
    cursor: pointer;
  }

  .mobile-wrapper {
    display: none;
  }

  @media (max-width: 992px) {
    .hidden-mobile {
      display: none;
    }

    .mobile-wrapper {
      display: block;
    }

    .slides {
      padding: 50px 0;
    }

    .testimonial-photo {
      display: none;
    }

    .testimonial-photo.selected {
      display: block;
      height: 60vw;
      width: 60vw;
    }

    i {
      margin: -30vw -13px 0 -13px;
      text-align: center;
      pointer-events: all;
      z-index: 1;
    }

    .testimonial-text {
      width: 100vw;
    }

    .testimonial-photo + .contextmenu {
      display: none;
    }

    .testimonial-photo.selected + .contextmenu {
      display: flex;
      top: -58vw;
      left: 2vw;
    }
  }

  /* wwManager:start */

  .contextmenu {
      position: relative;
      top: -185px;
      left: 10px;
      width: 30px;
      height: 30px;
      color: white;
      background-color: #ef811a;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
      cursor: pointer;
      z-index: 2;
  }
  .selected + .contextmenu {
    top: -360px;
    left: 25px;
  }
  .contextmenu-center {
      left: calc(50% - 15px);
  }
  /* wwManager:end */
</style>
