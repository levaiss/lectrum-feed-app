import axios from 'axios'
import '@testing-library/jest-dom/extend-expect'

axios.defaults.adapter = require('axios/lib/adapters/http')
