
<!--
 * @Date: 2022-03-21 14:21:02
 * @LastEditors: dwj18066042960
 * @FilePath: \Test\src\components\A.vue
-->
<template>
    <div>
        <div
            ref="el"
            :style="style"
            style="touch-action:none;"
            class="fixed flex flex-col items-center justify-center py-2 w-[200px] bg-white select-none cursor-move"
        >
            <img alt="Vue logo" src="../assets/logo.png" />
            <div class="text-black">👋 Drag me!</div>
            <div
                class="text-sm text-gray-800 opacity-50"
            >I am at {{ Math.round(x) }}, {{ Math.round(y) }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useDraggable } from '@vueuse/core';
import { isClient } from '@vueuse/shared';
import { ref } from 'vue';

const innerWidth = isClient ? window.innerWidth : 200
const el = ref(null)
const { x, y, style } = useDraggable(el, {
    initialValue: { x: innerWidth / 4.2, y: 0 },
    preventDefault: true,
})
</script>