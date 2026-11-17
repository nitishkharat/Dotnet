
using MySql.Data.MySqlClient;
using TFLInsurance.Interfaces;
using TFLInsurance.Models;

namespace TFLInsurance.Repositories
{
    public class PolicyRepository : IPolicyRepository
    {
        private readonly IConfiguration _configuration;

        public PolicyRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // Database connection
        private MySqlConnection GetConnection()
        {
            return new MySqlConnection(
                _configuration.GetConnectionString("DefaultConnection"));
        }

        // Get all policies
        public async Task<List<Policy>> GetAllPolicies()
        {
            List<Policy> policies = new List<Policy>();

            using var connection = GetConnection();
            await connection.OpenAsync();

            string query = "SELECT * FROM policies";

            using var command = new MySqlCommand(query, connection);
            using var reader = await command.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                policies.Add(new Policy
                {
                    policy_id = reader.GetInt64(reader.GetOrdinal("policy_id")),
                    policy_number = reader.GetString(reader.GetOrdinal("policy_number")),
                    proposal_id = reader.GetInt64(reader.GetOrdinal("proposal_id")),
                    customer_id = reader.GetInt64(reader.GetOrdinal("customer_id")),
                    product_id = reader.GetInt64(reader.GetOrdinal("product_id")),

                    agent_id  = reader.IsDBNull(reader.GetOrdinal("agent_id"))
                        ? null
                        : reader.GetInt64(reader.GetOrdinal("agent_id")),

                    sum_assured= reader.GetDecimal(reader.GetOrdinal("sum_assured")),
                    premium_amount = reader.GetDecimal(reader.GetOrdinal("premium_amount")),

                    premium_frequency = reader.GetString(reader.GetOrdinal("premium_frequency")),
                       
                    start_date = reader.GetDateTime(reader.GetOrdinal("start_date")),
                    maturity_date = reader.GetDateTime(reader.GetOrdinal("maturity_date")),
                    status = reader.GetString(reader.GetOrdinal("status")),
                    issued_at = reader.GetDateTime(reader.GetOrdinal("issued_at")),
                    created_at = reader.GetDateTime(reader.GetOrdinal("created_at")),

                   updated_at = reader.IsDBNull(reader.GetOrdinal("updated_at"))
                             ? null
                    : reader.GetDateTime(reader.GetOrdinal("updated_at"))
                      
                });
            }

            return policies;
        }

        // Get policy by ID
        public async Task<Policy?> GetPolicyById(long policyId)
        {
            using var connection = GetConnection();
            await connection.OpenAsync();

            string query = "SELECT * FROM policies WHERE policy_id = @policyId";

            using var command = new MySqlCommand(query, connection);

            command.Parameters.AddWithValue("@policyId", policyId);

            using var reader = await command.ExecuteReaderAsync();

            if (await reader.ReadAsync())
            {
                return new Policy
                {
                    policy_id = reader.GetInt64(reader.GetOrdinal("policy_id")),
                    policy_number = reader.GetString(reader.GetOrdinal("policy_number")),
                    proposal_id = reader.GetInt64(reader.GetOrdinal("proposal_id")),                    customer_id = reader.GetInt64(reader.GetOrdinal("customer_id")),
                    product_id = reader.GetInt64(reader.GetOrdinal("product_id")),
                    agent_id =reader.GetInt64(reader.GetOrdinal("agent_id")),
                    sum_assured = reader.GetDecimal(reader.GetOrdinal("sum_assured")),
                    premium_amount = reader.GetDecimal(reader.GetOrdinal("premium_amount")),
                    premium_frequency = reader.GetString(reader.GetOrdinal("premium_frequency")),
                    start_date = reader.GetDateTime(reader.GetOrdinal("start_date")),
                    maturity_date = reader.GetDateTime(reader.GetOrdinal("maturity_date")),
                    status = reader.GetString(reader.GetOrdinal("status")),
                    issued_at = reader.GetDateTime(reader.GetOrdinal("issued_at")),
                    created_at = reader.GetDateTime(reader.GetOrdinal("created_at")),
                    updated_at = reader.GetDateTime(reader.GetOrdinal("updated_at"))
 
                };
            }

            return null;
        }

        // // Add new policy
        // public async Task<long> AddPolicy(Policy policy)
        // {
        //     using var connection = GetConnection();
        //     await connection.OpenAsync();

        //     string query = @"
        //         INSERT INTO policies
        //         (
        //             policy_number,
        //             proposal_id,
        //             customer_id,
        //             product_id,
        //             agent_id,
        //             sum_assured,
        //             premium_amount,
        //             premium_frequency,
        //             start_date,
        //             maturity_date,
        //             status,
        //             issued_at,
        //             created_at
        //         )
        //         VALUES
        //         (
        //             @policyNumber,
        //             @proposalId,
        //             @customerId,
        //             @productId,
        //             @agentId,
        //             @sumAssured,
        //             @premiumAmount,
        //             @premiumFrequency,
        //             @startDate,
        //             @maturityDate,
        //             @status,
        //             NOW(),
        //             NOW()
        //         )";

        //     using var command = new MySqlCommand(query, connection);

        //     command.Parameters.AddWithValue("@policyNumber", policy.policy_number);
        //     command.Parameters.AddWithValue("@proposalId", policy.proposal_id);
        //     command.Parameters.AddWithValue("@customerId", policy.customer_id);
        //     command.Parameters.AddWithValue("@productId", policy.product_id);
        //     command.Parameters.AddWithValue(
        //         "@agentId",
        //         policy.agent_id.HasValue ? policy.agent_id.Value : DBNull.Value);

        //     command.Parameters.AddWithValue("@sumAssured", policy.sum_assured);
        //     command.Parameters.AddWithValue("@premiumAmount", policy.premium_amount);

        //     command.Parameters.AddWithValue(
        //         "@premiumFrequency",
        //         policy.premium_frequency == null
        //             ? DBNull.Value
        //             : policy.premium_frequency);

        //     command.Parameters.AddWithValue("@startDate", policy.start_date);
        //     command.Parameters.AddWithValue("@maturityDate", policy.maturity_date);
        //     command.Parameters.AddWithValue("@status", policy.status);

        //     await command.ExecuteNonQueryAsync();

        //     return command.LastInsertedId;
        // }


public async Task<long> AddPolicy(Policy policy)
{
    using var connection = GetConnection();
    await connection.OpenAsync();

    string query = @"
        INSERT INTO policies
        (
            policy_number,
            proposal_id,
            customer_id,
            product_id,
            agent_id,
            sum_assured,
            premium_amount,
            premium_frequency,
            start_date,
            maturity_date,
            status,
            issued_at,
            created_at
        )
        VALUES
        (
            @policyNumber,
            @proposalId,
            @customerId,
            @productId,
            @agentId,
            @sumAssured,
            @premiumAmount,
            @premiumFrequency,
            @startDate,
            @maturityDate,
            @status,
            NOW(),
            NOW()
        )";

    using var command = new MySqlCommand(query, connection);

    command.Parameters.AddWithValue("@policyNumber", policy.policy_number);
    command.Parameters.AddWithValue("@proposalId", policy.proposal_id);
    command.Parameters.AddWithValue("@customerId", policy.customer_id);
    command.Parameters.AddWithValue("@productId", policy.product_id);

    command.Parameters.AddWithValue(
        "@agentId",
        policy.agent_id.HasValue ? policy.agent_id.Value : DBNull.Value);

    command.Parameters.AddWithValue("@sumAssured", policy.sum_assured);
    command.Parameters.AddWithValue("@premiumAmount", policy.premium_amount);
    command.Parameters.AddWithValue("@premiumFrequency", policy.premium_frequency);
    command.Parameters.AddWithValue("@startDate", policy.start_date);
    command.Parameters.AddWithValue("@maturityDate", policy.maturity_date);
    command.Parameters.AddWithValue("@status", policy.status);

    await command.ExecuteNonQueryAsync();

    return command.LastInsertedId;
}




        // Update policy
        public async Task<bool> UpdatePolicy(Policy policy)
        {
            using var connection = GetConnection();
            await connection.OpenAsync();

            string query = @"
                UPDATE policies
                SET
                    policy_number = @policyNumber,
                    proposal_id = @proposalId,
                    customer_id = @customerId,
                    product_id = @productId,
                    agent_id = @agentId,
                    sum_assured = @sumAssured,
                    premium_amount = @premiumAmount,
                    premium_frequency = @premiumFrequency,
                    start_date = @startDate,
                    maturity_date = @maturityDate,
                    status = @status,
                    updated_at = NOW()
                WHERE policy_id = @policyId";

            using var command = new MySqlCommand(query, connection);

            command.Parameters.AddWithValue("@policyId", policy.policy_id);
            command.Parameters.AddWithValue("@policyNumber", policy.policy_number);
            command.Parameters.AddWithValue("@proposalId", policy.proposal_id);
            command.Parameters.AddWithValue("@customerId", policy.customer_id);
            command.Parameters.AddWithValue("@productId", policy.product_id);

            command.Parameters.AddWithValue("@agentId",policy.agent_id.HasValue ? policy.agent_id.Value : DBNull.Value);

            command.Parameters.AddWithValue("@sumAssured", policy.sum_assured);
            command.Parameters.AddWithValue("@premiumAmount", policy.premium_amount);

            command.Parameters.AddWithValue("@premiumFrequency",policy.premium_frequency == null? DBNull.Value: policy.premium_frequency);

            command.Parameters.AddWithValue("@startDate", policy.start_date);
            command.Parameters.AddWithValue("@maturityDate", policy.maturity_date);
            command.Parameters.AddWithValue("@status", policy.status);

            int rowsAffected = await command.ExecuteNonQueryAsync();

            return rowsAffected > 0;
        }

        // Delete policy
      
public async Task<bool> DeletePolicy(long policyId)
{
    using var connection = GetConnection();

    await connection.OpenAsync();

    string query = "DELETE FROM policies WHERE policy_id = @policyId";

    using var command = new MySqlCommand(query, connection);

    command.Parameters.AddWithValue("@policyId", policyId);

    int result = await command.ExecuteNonQueryAsync();

    if (result > 0)
    {
        return true;
    }

    return false;
}

        // Read policy data from database
        private Policy ReadPolicy(MySqlDataReader reader)
        {
            return new Policy
            {
                policy_id = reader.GetInt64(reader.GetOrdinal("policy_id")),
                policy_number = reader.GetString(reader.GetOrdinal("policy_number")),
                proposal_id = reader.GetInt64(reader.GetOrdinal("proposal_id")),
                customer_id = reader.GetInt64(reader.GetOrdinal("customer_id")),
                product_id = reader.GetInt64(reader.GetOrdinal("product_id")),

                agent_id  = reader.IsDBNull(reader.GetOrdinal("agent_id"))
                    ? null
                    : reader.GetInt64(reader.GetOrdinal("agent_id")),

                sum_assured= reader.GetDecimal(reader.GetOrdinal("sum_assured")),
                premium_amount = reader.GetDecimal(reader.GetOrdinal("premium_amount")),

                premium_frequency = reader.IsDBNull(reader.GetOrdinal("premium_frequency"))
                    ? null
                    : reader.GetString(reader.GetOrdinal("premium_frequency")),

                start_date = reader.GetDateTime(reader.GetOrdinal("start_date")),
                maturity_date = reader.GetDateTime(reader.GetOrdinal("maturity_date")),
                status = reader.GetString(reader.GetOrdinal("status")),
                issued_at = reader.GetDateTime(reader.GetOrdinal("issued_at")),
                created_at = reader.GetDateTime(reader.GetOrdinal("created_at")),

                updated_at  = reader.GetDateTime(reader.GetOrdinal("updated_at"))
                   
            };
        }
    }
}
