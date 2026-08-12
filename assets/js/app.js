document.addEventListener('DOMContentLoaded', () => {
    const workoutForm = document.getElementById('workout-form');
    const workoutList = document.getElementById('workout-list');
    const clearBtn = document.getElementById('clear-btn');

    const totalWorkoutsEl = document.getElementById('total-workouts');
    const totalDurationEl = document.getElementById('total-duration');
    const totalCaloriesEl = document.getElementById('total-calories');

    let workouts = JSON.parse(localStorage.getItem('workouts')) || [];

    function updateLocalStorage() {
        localStorage.setItem('workouts', JSON.stringify(workouts));
    }

    function renderUI() {
        workoutList.innerHTML = '';

        let totalDuration = 0;
        let totalCalories = 0;

        if (workouts.length === 0) {
            workoutList.innerHTML = `<tr><td colspan="6" style="text-align:center; color: #64748b;">No workouts recorded yet.</td></tr>`;
        } else {
            workouts.forEach((item, index) => {
                totalDuration += Number(item.duration);
                totalCalories += Number(item.calories);

                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td><strong>${escapeHtml(item.name)}</strong></td>
                    <td>${escapeHtml(item.category)}</td>
                    <td>${item.duration} mins</td>
                    <td>${item.calories} kcal</td>
                    <td>${item.date}</td>
                    <td><button class="delete-item" data-index="${index}">&times;</button></td>
                `;
                workoutList.appendChild(tr);
            });
        }

        totalWorkoutsEl.textContent = workouts.length;
        totalDurationEl.textContent = totalDuration;
        totalCaloriesEl.textContent = totalCalories;
    }

    function escapeHtml(str) {
        return str.replace(/[&<>"']/g, (m) => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        })[m]);
    }

    workoutForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('exercise-name').value.trim();
        const category = document.getElementById('exercise-category').value;
        const duration = parseInt(document.getElementById('duration').value, 10);
        const calories = parseInt(document.getElementById('calories').value, 10);
        const date = new Date().toLocaleDateString();

        if (!name || isNaN(duration) || isNaN(calories)) return;

        const newWorkout = { name, category, duration, calories, date };
        workouts.push(newWorkout);

        updateLocalStorage();
        renderUI();

        workoutForm.reset();
    });

    workoutList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-item')) {
            const index = e.target.getAttribute('data-index');
            workouts.splice(index, 1);
            updateLocalStorage();
            renderUI();
        }
    });

    clearBtn.addEventListener('click', () => {
        if (workouts.length === 0) return;
        if (confirm('Are you sure you want to clear all logged workouts?')) {
            workouts = [];
            updateLocalStorage();
            renderUI();
        }
    });

    renderUI();
});