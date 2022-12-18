<script setup lang="ts">
     import { ref } from 'vue'

    const props = defineProps(['itemText','itemIndex']);

    const emits = defineEmits([
        'editValue',
        'deleteID'
    ])

    const text = ref<any>(true);
    
    const isEdit = ref<boolean>(true);

    const onEdit = ()=>{
        isEdit.value = !isEdit.value;
        text.value = props.itemText;
    };

    const save = ()=>{
        isEdit.value = !isEdit.value;
        emits('editValue',props.itemIndex,text.value);
    };


    const onDelete = ()=>{
        emits('deleteID',props.itemIndex);
    }


</script>

<template>
    <div class="list-item">
        <div class="list-item-content">
            <span v-if="isEdit">{{props.itemText}}</span>
            <span v-else><input v-model="text"/></span>
        </div>

        <div class="list-item-button">
            <button @click="onDelete">删除</button>
            <button v-if="isEdit" @click="onEdit">编辑</button>
            <button v-else @click="save">保存</button>
        </div>
    </div>
</template>

<style scoped>

</style>
