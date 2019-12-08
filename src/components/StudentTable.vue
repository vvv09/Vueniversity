<template>
    <div>
        Всего : {{students.length}}
        <div id="table">
            <table class="highlight">
                <tbody>
                <ItemRow
                        v-for="(student, i) in students"
                        :item="student"
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
    import ItemService from "@/services/studentService"

    export default {
        name: "StudentTable",
        components: {
            ItemRow
        },
        data() {
            return {
                students: []
            }
        },
        methods: {
            refreshList() {
                ItemService.retrieveAll()
                    .then((response) => {
                        this.students = response.data;
                    });
            },
            updateItem(id) {
                this.$router.push(`/students/${id}`)
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