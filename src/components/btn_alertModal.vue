<template>
    <div class="fixed w-full h-full bg-wrap top-0 left-0 z-[100]" v-if="show" @click="$emit('close')">
        <div class="absolute z-[100] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
                class="w-60 flex flex-col items-center justify-center gap-5  rounded-xl shadow-main bg-white py-5 animate-bounceIn">
                <p class="text-2xl font-bold">{{ message }}</p>
                <button class="bg-Mred text-white text-xl px-3 py-2 rounded" type="button"
                    @click="$emit('close')">關閉</button>
            </div>
        </div>
    </div>
</template>

<script setup>

defineProps({
    message: {
        type: String,
        required: true
    },
    show: {
        type: Boolean,
        required: true
    }
})
</script>
