<template>
    <div>
        <h3 v-if="id == -1" style="background-color: #26A69A">Новая Аудитория</h3>
        <h3 v-else style="background-color: #2196F3">Аудитория : id ={{id}}</h3>
        <div class="container">
            <form @submit="doSubmit">
                <label for="name">Название</label>
                <input type="text" class="form-control" v-model="name" id="name">
                <button class="btn btn-success" type="submit">Сохранить</button>
            </form>
        </div>
    </div>
</template>

<script>
    import ItemService from "@/services/classroomService"

    export default {
        name: "Classroom",
        data() {
            return {
                name: ""
            }
        },
        computed: {
            id() {
                return this.$route.params.id
            }
        },
        methods: {
            refreshForm() {
                ItemService.retrieveItem(this.id)
                    .then(response => {
                        this.name = response.data.name;
                    })
            },
            doSubmit(e) {
                e.preventDefault();
                if (this.id == -1) {
                    ItemService.createItem({name: this.name})
                        .then(() => {this.$router.push('/classrooms')})
                } else {
                    ItemService.updateItem(this.id, {name: this.name})
                        .then(() => {this.$router.push('/classrooms')})
                }
            }
        },
        created() {
            this.refreshForm();
        }
    }
</script>

<style scoped>

</style>