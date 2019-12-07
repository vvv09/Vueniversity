<template>
    <tr>
        <td>{{index + 1}}</td>
        <td v-if="item.name">{{item.name}} <span style="color: grey"><em>(id={{item.id}})</em></span></td>
        <td v-if="item.firstName">{{item.firstName}}</td>
        <td v-if="item.middleName">{{item.middleName}}</td>
        <td v-if="item.lastName">{{item.lastName}} <span style="color: grey"><em>(id={{item.id}})</em></span></td>
        <td><button class="btn btn-small blue" @click="$emit('update', item.id)">Update</button></td>
        <td><button class="btn btn-small red" @click="$emit('delete', item.id)">Delete</button></td>
    </tr>
</template>

<script>
    export default {
        name: "ItemRow",
        props: ['item', 'index']
    }
</script>

<style scoped>

</style>