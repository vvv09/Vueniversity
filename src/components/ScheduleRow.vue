<template>
    <tr>
        <td v-if="item.parity">{{item.parity}}</td>
        <td v-if="item.dayOfWeek">{{item.dayOfWeek}}</td>
        <td v-if="item.lesson">{{item.lesson}}</td>
        <td v-if="item.subject.name">{{item.subject.name}}</td>
        <td v-if="item.classroom.name">{{item.classroom.name}}</td>
        <td v-if="item.teacher.lastName">{{item.teacher.lastName}}  {{item.teacher.firstName}} {{item.teacher.middleName}}</td>
        <td v-if="item.group.name">{{item.group.name}}</td>
    </tr>
</template>

<script>
    export default {
        name: "ScheduleRow",
        props: ['item', 'index']
    }
</script>

<style scoped>

</style>