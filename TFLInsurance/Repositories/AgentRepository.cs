
using MySql.Data.MySqlClient;
using TFLInsurance.Interfaces;
using TFLInsurance.Models;
using TFLInsurance.DTOs.Request;

namespace TFLInsurance.Repositories
{
    public class AgentsRepository : IAgentsRepository
    {
        private readonly IConfiguration _configuration;

        public AgentsRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // Database Connection
        private MySqlConnection GetConnection()
        {
            var connectionString = _configuration.GetConnectionString("DefaultConnection");

            if (string.IsNullOrWhiteSpace(connectionString))
            {
                throw new InvalidOperationException(
                    "The 'ConnectionStrings:DefaultConnection' setting is missing. " +
                    "Configure it with .NET User Secrets for development or an environment variable.");
            }

            return new MySqlConnection(connectionString);
        }

        // Get All Agents
        public async Task<List<Agents>> GetAllAgents()
        {
            List<Agents> agents = new List<Agents>();

            using var connection = GetConnection();
            await connection.OpenAsync();

            string query = "SELECT * FROM agents";

            using var command = new MySqlCommand(query, connection);
            using var reader = await command.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                agents.Add(new Agents
                {
                    agent_id = reader.GetInt64(reader.GetOrdinal("agent_id")),
                    user_id = reader.GetInt64(reader.GetOrdinal("user_id")),
                    agent_code = reader.GetString(reader.GetOrdinal("agent_code")),
                    license_number = reader.GetString(reader.GetOrdinal("license_number")),

                    joining_date = reader.IsDBNull(reader.GetOrdinal("joining_date"))
                        ? null
                        : reader.GetDateTime(reader.GetOrdinal("joining_date")),

                    status = reader.GetString(reader.GetOrdinal("status")),
                    created_at = reader.GetDateTime(reader.GetOrdinal("created_at"))
                });
            }

            return agents;
        }

        // Get Agent By ID
        public async Task<Agents?> GetAgentById(long agent_id)
        {
            using var connection = GetConnection();
            await connection.OpenAsync();

            string query = "SELECT * FROM agents WHERE agent_id = @agent_id";

            using var command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@agent_id", agent_id);

            using var reader = await command.ExecuteReaderAsync();

            if (await reader.ReadAsync())
            {
                return new Agents
                {
                    agent_id = reader.GetInt64(reader.GetOrdinal("agent_id")),
                    user_id = reader.GetInt64(reader.GetOrdinal("user_id")),
                    agent_code = reader.GetString(reader.GetOrdinal("agent_code")),
                    license_number = reader.GetString(reader.GetOrdinal("license_number")),

                    joining_date = reader.IsDBNull(reader.GetOrdinal("joining_date"))
                        ? null
                        : reader.GetDateTime(reader.GetOrdinal("joining_date")),

                    status = reader.GetString(reader.GetOrdinal("status")),
                    created_at = reader.GetDateTime(reader.GetOrdinal("created_at"))
                };
            }

            return null;
        }

        // Add Agent post method 
        public async Task<long> AddAgent(CreateAgentRequest agent)
        {
            using var connection = GetConnection();
            await connection.OpenAsync();

            string query = @"INSERT INTO agents (user_id, agent_code, license_number, joining_date)
            VALUES
            (@user_id, @agent_code, @license_number, @joining_date)";

            using var command = new MySqlCommand(query, connection);

            command.Parameters.AddWithValue("@user_id", agent.user_id);
            command.Parameters.AddWithValue("@agent_code", agent.agent_code);
            command.Parameters.AddWithValue("@license_number", agent.license_number);

            command.Parameters.AddWithValue(
                "@joining_date",
                agent.joining_date.HasValue
                    ? agent.joining_date.Value
                    : DBNull.Value
            );

            await command.ExecuteNonQueryAsync();

            return command.LastInsertedId;
        }

        // Update Agent
        public async Task<bool> UpdateAgent(Agents agent)
        {
            using var connection = GetConnection();
            await connection.OpenAsync();

            string query = @"
                UPDATE agents
                SET agent_code = @agent_code,
                    license_number = @license_number,
                    joining_date = @joining_date,
                    status = @status
                WHERE agent_id = @agent_id";

            using var command = new MySqlCommand(query, connection);

            command.Parameters.AddWithValue("@agent_id", agent.agent_id);
            command.Parameters.AddWithValue("@agent_code", agent.agent_code);
            command.Parameters.AddWithValue("@license_number", agent.license_number);

            command.Parameters.AddWithValue(
                "@joining_date",
                agent.joining_date.HasValue
                    ? agent.joining_date.Value
                    : DBNull.Value
            );

            command.Parameters.AddWithValue("@status", agent.status);

            int rowsAffected = await command.ExecuteNonQueryAsync();

            return rowsAffected > 0;
        }

        // Delete Agent
        public async Task<bool> DeleteAgent(long agent_id)
        {
            using var connection = GetConnection();
            await connection.OpenAsync();

            string query = "DELETE FROM agents WHERE agent_id = @agent_id";

            using var command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@agent_id", agent_id);

            int rowsAffected = await command.ExecuteNonQueryAsync();

            return rowsAffected > 0;
        }
    }
}
