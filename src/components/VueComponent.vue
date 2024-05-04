<template>
    <div>
        <h1 style="color:#fff; text-align: center;">
            testing data
            counter: {{ data }}
        </h1>
        <h1>
        </h1>
        <button @click="incrementCount">Increment Count</button>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class VueComponent extends Vue {
    @Prop({ default: 0 }) cnt!: number;
    data = this.cnt;

    incrementCount() {
        this.data++;
    }
}
</script>
