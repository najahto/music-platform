<template>
 <section class="container mx-auto mt-6">
    <div class="md:grid md:grid-cols-3 md:gap-4">

      <app-upload ref="upload" :addSong="addSong" />

      <div class="col-span-2">
        <div class="bg-white rounded border border-gray-200 relative flex flex-col">
          <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
            <span class="card-title">My Songs</span>
            <i class="fa fa-compact-disc float-right text-green-400 text-2xl"></i>
          </div>
          <div class="p-6">
            <!-- Composition Items -->
            <composition-item v-for="(song,index) in songs" :key="song.documentId" :song="song"
            :updateSong="updateSong" :index="index" :removeSong="removeSong"
            :updateUnsavedFlag="updateUnsavedFlag"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import store from '@/store';
import AppUpload from '@/components/Upload.vue';
import CompositionItem from '@/components/CompositionItem.vue';
import { songsCollection, auth } from '@/includes/firebase';

export default {
  name: 'manage',
  components: {
    AppUpload,
    CompositionItem,
  },
  data() {
    return {
      songs: [],
      unsavedFlag: false,
    };
  },
  async created() {
    const snapshot = await songsCollection.where('uid', '==', auth.currentUser.uid).get();

    snapshot.forEach(this.addSong);
  },
  beforeRouteLeave(to, from, next) {
    // cancel uploas
    if (this.$refs.upload.cancelUploads()) {
      next();
    }
    // check if the user has unsaved changes
    if (!this.unsavedFlag) {
      next();
    } else {
      // eslint-disable-next-line no-alert, no-restricted-globals
      const leave = confirm('You have unsaved changes. Are you sure that you want to leave?');
      next(leave);
    }
  },
  methods: {
    updateSong(index, values) {
      this.songs[index].modified_name = values.modified_name;
      this.songs[index].genre = values.genre;
    },
    removeSong(index) {
      this.songs.splice(index, 1);
    },
    addSong(document) {
      const song = {
        ...document.data(),
        documentId: document.id,
      };
      this.songs.push(song);
    },
    updateUnsavedFlag(value) {
      this.unsavedFlag = value;
    }, // beforeRouteLeave(to, from, next) {

  // },
  },

//   beforeRouteEnter(to, from, next) {
//     console.log(store.state.userLoggedIn);
//     if (store.state.userLoggedIn) {
//       next();
//     } else {
//       next({ name: 'home' });
//     }
//   },
};
</script>
