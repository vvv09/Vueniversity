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
    import ItemService from "@/services/teacherService"

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
                ItemService.retrieveAll()
                    .then((response) => {
                        this.teachers = response.data;
                    });
            },
            updateItem(id) {
                this.$router.push(`/teachers/${id}`)
            },
            deleteItem(id) {
                ItemService.deleteItem(id)
                    .then(() => {
                        this.refreshList()
                    })
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