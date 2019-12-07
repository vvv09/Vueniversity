<template>
    <div>
        Всего : {{teachers.length}}
        <div id="table">
            <table class="highlight">
                <tbody>
                <ItemRow
                        v-for="(teacher, i) in teachers"
                        :item="teacher"
                        :index="i"
                        @update="updateItem"
                        @delete="deleteItem"/>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import ItemRow from "@/components/ItemRow"
    import TeacherService from "@/services/teacherService"

    export default {
        name: "TeacherTable",
        components: {
            ItemRow
        },
        data() {
            return {
                teachers: []
            }
        },
        methods: {
            refreshList() {
                TeacherService.retrieveAll()
                    .then((response) => {
                        this.teachers = response.data;
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