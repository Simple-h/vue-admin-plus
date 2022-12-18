<script setup lang="ts">
    import ListItem from './ListItem.vue';
    import { ref } from 'vue'

    const text =ref<any>();
    const list = ref<any[]>([]);

    const add = ()=>{
      if (!text.value) return;
      list.value.push(text.value);
      text.value = '';
    }

    const onSave = (index,value)=>{
      list.value.splice(index,1,value);
    }

    const onDelete = (index)=>{
      list.value.splice(index,1);
    }
</script>

<template>
      <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
    <div class="todo-list">
      
      <div class="todo-list-serach">
        <input type="text" v-model="text">
        <button @click="add">新建</button>
      </div>

      <div class="todo-list-body">
        <ListItem v-for="(item,index) in list" key="index" :itemText="item" :itemIndex="index" @editValue="onSave" @deleteID="onDelete" ></ListItem>
      </div>

    </div>
</template>

<style scoped>

</style>
