<template>
    <div>
        Всего : {{schedule.length}}
        <div id="table">
            <table class="highlight">
                <thead>
                <tr>
                    <td>
                        Чет/Нечет
                    </td>
                    <td>День Недели</td>
                    <td>№ пары</td>
                    <td>Предмет</td>
                    <td>Аудиотория</td>
                    <td>Препадователь</td>
                    <td>Группа</td>
                </tr>
                </thead>
                <tbody>
                <ScheduleRow
                        v-for="(s, i) in schedule"
                        :item="s"
                        :index="i"
                        @update="updateItem"
                        @delete="deleteItem"/>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import ScheduleRow from "@/components/ScheduleRow"
    import ScheduleService from "@/services/scheduleService"

    export default {
        name: "ScheduleTable",
        components: {
            ScheduleRow
        },
        data() {
            return {
                schedule: []
            }
        },
        methods: {
            refreshList() {
                ScheduleService.retrieveAll()
                    .then((response) => {
                        this.schedule = response.data;
                    });
            },
            updateItem() {
                console.log("updating")
            },
            deleteItem() {
                console.log("deleting")
            }
        },
        created() {
            this.refreshList();
        }
    }
</script>

<style scoped>
    #table {
        height: 73vh;
        overflow: hidden;
    }

    #table:hover {
        overflow-y: overlay;
    }

</style>